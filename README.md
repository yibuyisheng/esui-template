基于 esui 控件库的单项数据流库，灵感来自于 React 。

## 目标

实现类似与 React 的数据与界面的绑定。

## 目前想法

可以使用类似于 html 的方式写模板代码：

```html
<From action="http://www.baidu.com" method="post">
    <input type="text" name="name" />
    <input type="password" name="password" />
    <Button>提交</Button>
    <Button>重置</Button>
</From>
```

然后这段代码会被转换成：

```js
createElement('Form', {action: 'http://www.baidu.com', method: 'post'}, [
    createElement('input', {type: 'text', name: 'name'}),
    createElement('input', {type: 'password', name: 'password'}),
    createElement('Button', {}, '提交'),
    createElement('Button', {}, '重置')
]);
```

在 createElement() 函数中会做数据与具体 DOM 结构的绑定，因此使得数据更新的时候，界面会自动更新。