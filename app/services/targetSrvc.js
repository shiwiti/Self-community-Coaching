// Shared Target Constructor
coachApp.factory("Target", function () {
    function Target(plainObject) {
        this.startDate = plainObject.startDate;
        this.name = plainObject.name;
        this.category = plainObject.category;
        this.description = plainObject.description;
        this.steps = plainObject.steps;
        this.reqDate = plainObject.reqDate;
        this.completed = plainObject.completed;
    };

    return Target;
});

function formatDate(date) {
    if (date) {
        newDate = new Date(date);
        var month = newDate.getMonth();
        var year = newDate.getFullYear();
        var day = newDate.getDate();

        return day + "/" + month + "/" + year;
    }
    return "no valid date";
}

coachApp.factory("targets", function (Target, $http) {
    var targetArr = [];
    var totTargs = 0;
    var compTargs = 0;
    var soonTargs = 0;

    var add = function (target) {
        target.startDate = formatDate(new Date());
        target.reqDate = formatDate(target.reqDate);
        targetArr.push(target);
    };

    var update = function (index, target) {
        targetArr[index] = target;
    };

    var remove = function (index) {
        targetArr.splice(index, 1);
    };

    var load = function (targetPlainObjectArr) {
         compTargs = 0;
         soonTargs = 0;
        for (var i = 0; i < targetPlainObjectArr.length; i++) {

            // targetPlainObjectArr.reqDate[i] = formatDate(targetPlainObjectArr.reqDate[i]);
            if (targetPlainObjectArr[i].completed){
                compTargs++;
            }
            // if ((targetPlainObjectArr[i].reqDate-Date())<=2){
            //     soonTargs++;
            //     }
            targetArr.push(new Target(targetPlainObjectArr[i]))
        }
        totTargs = targetArr.length;
    };

    var getCategories = function () {
        return $http.get("app/model/categories.json");
    }

    var getAll = function () {
        return targetArr;
    };

    var get = function (index) {
        return targetArr[index];
    };

    var removeAll = function () {
        targetArr = [];
    };

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        getCategories: getCategories,
        totTargs: totTargs,
        compTargs: compTargs,
        soonTargs: soonTargs
    };
});