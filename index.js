var wen_direction = (function () {
    var jqDirection;
    function Direction(id) {
        this.id = document.getElementById(id) || id ;
    }
    Direction.prototype.init = function (enterObj, leaveObj) {
        //鼠标滑入元素
        var self = this;
        this.id.addEventListener('mouseenter', function (e) {
            var directionNumber = self.main(e); //返回数字  返回0:上方进入， 返回1:右方进入，返回2：下方进入，返回3：左方进入
            var funArray = [enterObj.top, enterObj.right, enterObj.bottom, enterObj.left];
            funArray[directionNumber](self.id);
        },false);
        this.id.addEventListener('mouseleave', function (e) {
            var directionNumber = self.main(e); //返回数字  返回0:上方离开， 返回1:右方离开，返回2：下方离开，返回3：左方离开
            var funArray = [leaveObj.top, leaveObj.right, leaveObj.bottom, leaveObj.left];
            funArray[directionNumber](self.id);
        },false);
    };

    /*主函数 返回数字来判断从哪个方向进入*/
    Direction.prototype.main = function (e) {
        var w = this.id.scrollWidth;
        var h = this.id.scrollHeight;
        var x = (e.offsetX - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.offsetY - (h / 2)) * (h > w ? (w / h) : 1);
        var number = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        return number;
    };
    /*基于jquery的事件对象*/
    Direction.prototype.jqRun=function(e) {
        var directionNumber = this.jqMain(e);
        var obj = {};
        switch(directionNumber)
        {
            case 0://from top
                obj.left = 0;
                obj.top = "-100%";
                break;
            case 1://from right
                obj.left = "100%";
                obj.top = 0;
                break;
            case 2://from bottom
                obj.left = 0;
                obj.top = "100%";
                break;
            case 3://from left
                obj.left = "-100%";
                obj.top = 0;
                break;
        }
        return obj;
    };

    Direction.prototype.jqMain = function (e) {
        var w = this.id.width();
        var h = this.id.height();
        /*计算x和y得到一个角到elem的中心，得到相对于x和y值到div的中心*/
        var x = (e.pageX - this.id.offset().left - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - this.id.offset().top - (h / 2)) * (h > w ? (w / h) : 1);
        /** 鼠标从哪里来 / 角度 和 方向出去顺时针（得出的结果是TRBL 0 1 2 3
         * 首先计算点的角度，
         * 再加上180度摆脱负值
         * 除于90得到的象限（象限，又称象限角，意思就是一个圆之四分之一等份）
         * 加上3，做一个模（求模 求余数）4的象限转移到一个适当的顺时针 得出 TRBL 0 1 2 3（上/右/下/左）
         **/
        var number = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        return number;
    };

    return {
        run: function (id, enterObj, leaveObj) {//这个接口用于原生js
            var directionChild = new Direction(id);
            directionChild.init(enterObj, leaveObj);
        },
        jqRun: function(id, e){//暴露的这个接口是基于jquery的
            if(!jqDirection){
                jqDirection = new Direction(id);
            }
            return jqDirection.jqRun(e);//返回一个样式对象{left：string，top：string}
        }
    }
})();
module.exports = wen_direction;
