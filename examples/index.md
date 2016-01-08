# Demo

---

## 测试wen_direction.jqRun(id, e) 接口 和 wen_direction.run(id, enterObject, leaveObject) 接口

````html
<h2>run接口测试：</h2>
<div id="box"></div>
<h2>jqRun接口测试：</h2>
<div id="jqbox">
    <div id="client"></div>
    <div id="hidden"></div>
</div>
````

````css
 #box{
    width: 100px;
    height: 100px;
    background: #dddddd;
    margin: 100px;
}
#jqbox{
    position: relative;
    width: 100px;
    height: 100px;
    margin: 100px;
    overflow: hidden;
}
#client , #hidden{
    width:100%;
    height:100%;
    background: #dddddd;
    position: absolute;
}
#client{
    left:0;
    top:0;
}
#hidden{
    background: #6bc30d;
    left:-100%;
    top:-100%;
}
````

````javascript
var $ = require('jquery');
var wen_direction = require('wen_direction');
 //测试用例
var enterObject = {
    left: function(self) {
        self.innerHTML = "从左边进入";
        console.log("从左边进入");
    },
    right: function(self) {
        self.innerHTML = "从右边进入";
        console.log("从右边进入");
    },
    top: function(self) {
        self.innerHTML = "从上边进入";
        console.log("从上边进入");
    },
    bottom: function(self) {
        self.innerHTML = "从下边进入";
        console.log("从下边进入");
    }
};
var leaveObject = {
    left: function(self) {
        self.innerHTML = "从左边离开";
        console.log("从左边离开");
    },
    right: function(self) {
        self.innerHTML = "从右边离开";
        console.log("从右边离开");
    },
    top: function(self) {
        self.innerHTML = "从上边离开";
        console.log("从上边离开");
    },
    bottom: function(self) {
        self.innerHTML = "从下边离开";
        console.log("从下边离开");
    }
};
//run接口
wen_direction.run('box',enterObject, leaveObject);
//jqRun接口
var jqbox = $("#jqbox");
var hidden = jqbox.children("#hidden");
jqbox.hover(function(e) {
    hidden.css(wen_direction.jqRun(jqbox,e)).stop(true,true).animate({left: '0', top: '0'},200);
},function(e) {
    hidden.stop(true, true).animate(wen_direction.jqRun(jqbox,e), 200);
});
````

