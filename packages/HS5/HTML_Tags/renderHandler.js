// This basically makes the parent for all the rendering stuff
const { v4: uuidv4 } = require('uuid');
module.exports = {
    Command: function ({ input }) {
        let parent = input[0];
        input.splice(0, 1);
        let children = input.join(';');
        return `return (() => {
          /* Basic Component Renderer */
          let parent = ${parent};
          let components = [];
          let _INTERNAL_UUID_USED_FOR_STYLES = getUID(6);
          /* Function To Remove Component*/
          ${children};
          return (() => {
            if (typeof useUpdateArray !== 'undefined') {
              removeComponents(components, useUpdateArray)
            } else {
              removeComponents(components)
            }
          })
        })()`
            .trim()
            .replace(/\n|\r|\t/g, '');
    },
    Dependencies: function () {
        return `/* This library uses the new Harv Script Component System */
    
  function getUID(len){
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
          out = '';

    for(var i=0, clen=chars.length; i<len; i++){
      out += chars.substr(0|Math.random() * clen, 1);
    }

    // ensure that the uid is unique for this page
    return getUID.uids[out] ? getUID(len) : (getUID.uids[out] = out);
}
getUID.uids = {};
    
    `;
    },
};
