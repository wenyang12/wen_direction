var wen_direction = (function () {
    function Direction(id) {
        this.id = document.getElementById(id);
    }

    Direction.prototype.init = function (enterObj, leaveObj) {
        //鼠标滑入元素
        var self = this;
        this.id.addEventListener('mouseenter', function (e) {
            var directionNumber = self.main(e); //返回数字  返回0:上方进入， 返回1:右方进入，返回2：下方进入，返回3：左方进入
            var funArray = [enterObj.top, enterObj.right, enterObj.bottom, enterObj.left];
            funArray[directionNumber](self);
        });
        this.id.addEventListener('mouseleave', function (e) {
            var directionNumber = self.main(e); //返回数字  返回0:上方离开， 返回1:右方离开，返回2：下方离开，返回3：左方离开
            var funArray = [leaveObj.top, leaveObj.right, leaveObj.bottom, leaveObj.left];
            funArray[directionNumber](self);
        });
    };
    /*主函数 返回数字来判断从哪个方向进入*/
    Direction.prototype.main = function (e) {
        var w = this.id.scrollWidth;
        var h = this.id.scrollHeight;
        var x = (e.clientX - this.id.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.clientY - this.id.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var number = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        return number;
    };
    return {
        run: function (id, enterObj, leaveObj) {
            var directionChild = new Direction(id);
            directionChild.init(enterObj, leaveObj);
        }
    }
})();
module.exports = wen_direction;
