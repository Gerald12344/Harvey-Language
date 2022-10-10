module.exports = function findStart(loop, check) {
    for (let i = 0; i < loop.length; i++) {
        if (loop[i].startsWith(check)) {
            try {
                return `${loop[i].replace(check, '')}`;
            } catch (e) {
                return '';
            }
        }
    }
};
