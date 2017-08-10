// Shared Vision Constructor
coachApp.factory("Vision", function () {
    function Vision(plainObject) {
        this.startDate = plainObject.startDate;
        this.name = plainObject.name;
        this.category = plainObject.category;
        this.imageUrl = plainObject.imageUrl;
    };

    return Vision;
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

coachApp.factory("visions", function (Vision, $http) {
    var visionArr = [];

    var add = function (vision) {
        vision.startDate = formatDate(new Date());
        visionArr.push(vision);
    }

    var update = function (index, vision) {
        visionArr[index] = vision;
    }

    var remove = function (index) {
        visionArr.splice(index, 1);
    }

    var load = function (visionPlainObjectArr) {
        for (var i = 0; i < visionPlainObjectArr.length; i++) {
            visionArr.push(new Vision(visionPlainObjectArr[i]))
        }
    }

    var getCategories = function () {
        return $http.get("app/model/categories.json");
    }

    var getAll = function () {
        return visionArr;
    }

    var get = function (index) {
        return visionArr[index];
    }

    var removeAll = function () {
        visionArr = [];
    };

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        getCategories: getCategories
    }
});