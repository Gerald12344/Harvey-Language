// This basically makes the parent for all the rendering stuff
module.exports = {
    Command: function (input) {
        let parent = input[0];
        input.splice(0, 1);
        let children = input.join(';');
        return `return (() => {
      /* Basic Component Renderer */

      /* Core Globals */
      let parent = ${parent};
      let components = [];
      let _INTERNAL_UUID_USED_FOR_STYLES = "";

      /* Function To Remove Component*/
      let deleteAll = () => {
        if (typeof useUpdateArray !== 'undefined') {
          removeComponents(components, useUpdateArray)
        } else {
          removeComponents(components)
        }
      }

      /* Refresh on styles loaded */
      let refreshComponent = () => {
        deleteAll();
        loadComp();
      }


      /* Actual html */
      let loadComp = () => {
        ${children};
      }
      
      loadComp();

      /* Clean up on unredner (/)
      return (() => {
        deleteAll();
      })
    })()`
            .trim()
            .replace(/\n|\r|\t/g, '');
    },
    Dependencies: function () {
        return `/* This library uses the new Harv Script Component System */ `;
    },
};
