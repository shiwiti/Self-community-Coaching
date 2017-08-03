// Shared Vision Constructor
coachApp.factory("Vision", function () {
    function Vision(plainObject) {
        this.startDate = plainObject.startDate;
        this.name = plainObject.name;
        this.content = plainObject.content;
        this.category = plainObject.category;
        this.imageUrl = plainObject.imageUrl;
    };

    return Vision;
});



coachApp.factory("visions", function (target) {
    var visionArr = [];

    var add = function (vision) {
        vision.startDate = Date();
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

    var getAll = function () {
        return visionArr;
    }

    var get = function (index) {
        return visionArr[index];
    }


    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get
    }
});