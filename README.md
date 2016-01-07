# wen_direction [![spm version](http://spmjs.io/badge/wen_direction)](http://spmjs.io/package/wen_direction)

---

鼠标进入和离开元素4个方向对应的相关操作

## Install

```
$ spm install wen_direction --save
```

## Usage

```js
var wen_direction = require('wen_direction');
// use wen_direction.run(id, enterObject, leaveObject);
```

## 介绍

这个模块用于判断鼠标是从哪个方向进入和离开元素后的相关回调操作

这个对象暴露了一个run方法，有三个参数：wen_direction.run(id, enterObject, leaveObject)

- id : 元素的id
- enterObject：用于判断鼠标是从哪个方向进入元素后的对象，对象必须含有四个方向的回调方法，即如下
    ```
    enterObjext = {
        left：function(self){//self是对id这个元素的引用
            //这里是鼠标从左边进入元素后的回调
        }，
        right: function(self){
            //这里是鼠标从右边进入元素后的回调
        }，
        top: function(self){
            //这里是鼠标从上边进入元素后的回调
        }，
        bottoom: function(self){
            //这里是鼠标从下边进入元素后的回调
        }
    }
    ```
- leaveObject：用于判断鼠标是从哪个方向离开元素后的对象，对象必须含有四个方向的回调方法，即如下：
    ```
        leaveObject = {
            left：function(self){//self是对id这个元素的引用
                //这里是鼠标从左边离开元素后的回调
            }，
            right: function(self){
                //这里是鼠标从右边离开元素后的回调
            }，
            top: function(self){
                //这里是鼠标从上边离开元素后的回调
            }，
            bottoom: function(self){
                //这里是鼠标从下边离开元素后的回调
            }
        }
        ```
