# Demo

---
      
````html
<div id="box"></div>
````

````css
#box {
    width: 100px;
    height: 100px;
    background: cadetblue;
}
````

````javascript
var wen_direction = require('wen_direction');
var enterObject = {
        left: function(self) {
            console.log("从左边进入");
        },
        right: function(self) {
            console.log("从右边进入");
        },
        top: function(self) {
            console.log("从上边进入");
        },
        bottom: function(self) {
            console.log("从下边进入");
        }
    };
    var leaveObject = {
        left: function(self) {
            console.log("从左边离开");
        },
        right: function(self) {
            console.log("从右边离开");
        },
        top: function(self) {
            console.log("从上边离开");
        },
        bottom: function(self) {
            console.log("从下边离开");
        }
    };
wen_direction.run('box',enterObject, leaveObject);
````

>打开浏览器控制台既可以看到鼠标从哪个方向进入和离开元素后对应的相关操作



