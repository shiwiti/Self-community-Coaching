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
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
    return "0000-00-00";//no valid date
}

// function formatDate(date) {
//     if (date) {
//         newDate = new Date(date);
//         var month = newDate.getMonth()+1;
//         var year = newDate.getFullYear();
//         var day = newDate.getDate();

//         return day + "/" + month + "/" + year;
//     }
//     return "0000-00-00";//no valid date
// }

coachApp.factory("targets", function (Target, $http) {
    var targetArr = [];
    // var totTargs = 0;
    // var compTargs = 0;
    // var soonTargs = 0;

    var add = function (target) {
        target.startDate = formatDate(new Date());
        target.reqDate = formatDate(target.reqDate);
        targetArr.push(target);
    };

    var update = function (index, target) {
        target.reqDate = formatDate(target.reqDate);
        targetArr[index] = target;
    };

    var remove = function (index) {
        targetArr.splice(index, 1);
    };

    var load = function (targetPlainObjectArr) {
        //  compTargs = 0;
        //  soonTargs = 0;
        for (var i = 0; i < targetPlainObjectArr.length; i++) {

            // targetPlainObjectArr.reqDate[i] = formatDate(targetPlainObjectArr.reqDate[i]);
            targetArr.push(new Target(targetPlainObjectArr[i]))
        }
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
        // totTargs: totTargs,
        // compTargs: compTargs,
        // soonTargs: soonTargs
    };
});