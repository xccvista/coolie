define(function(require, exports, module){
    var b = require('./libs/path1/path2/b');
    module.exports = function(){
        alert('load ' + module.id);
        alert(b.name);
    };
});