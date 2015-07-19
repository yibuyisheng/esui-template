require(['./DefaultControl'], function (DefaultControl) {
    var controls = {};

    function createElement(tagName, attrs, children) {
        // 是已经注册的自定义控件
        if (controls[tagName]) {

        }
        // 当成原生的 html 元素
        else {
            if (tagName === '#text') {
                return new Control({
                    type: 'span',

                });
            }


        }
    }

    return {
        createElement: createElement
    };
});