// Shared Target Constructor
coachApp.factory("Target", function(){
    function Target(plainObject) {
        this.startDate = plainObject.startDate;
        this.name = plainObject.name;
        this.description = plainObject.description;
        this.steps = plainObject.steps;
        this.reqDate = plainObject.reqDate;
        // this.imageUrl = plainObject.imageUrl;
    };

    return Target;
});



coachApp.factory("targets", function(target) {
    var targetArr = [];

    var add = function(targetWoDate) {
     //   targetArr.push(targetWoDate+targetWoDate.startDate=Date());
    }

    var update = function(index, target) {
        targetArr[index] = target;
    }

    var remove = function(index) {
        targetArr.splice(index, 1);
    }

    var load = function(targetPlainObjectArr) {
        for (var i = 0; i < targetPlainObjectArr.length; i++) {
            targetArr.push(new Target(targetPlainObjectArr[i]))
        }
    }

    var getAll = function() {
        return targetArr;
    }

    var get = function(index) {
        return targetArr[index];
    }

    var removeAll = function() {
        targetArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll
    }
})