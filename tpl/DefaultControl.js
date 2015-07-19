require(function () {
    var Control = require('esui/Control');
    var lib = require('esui/lib');

    function DefaultControl() {

    }

    lib.inherits(DefaultControl, Control);
    require('esui/main').register('DefaultControl');
    return DefaultControl;
});