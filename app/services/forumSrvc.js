// Shared Discussion Constructor
coachApp.factory("Discussion", function () {
    function Discussion(plainObject) {
        this.startDate = plainObject.startDate;
        this.targetOrVision = plainObject.targetOrVision;
        this.name = plainObject.name;
        this.category = plainObject.category;
        this.author = plainObject.author;        
        this.replies = plainObject.replies;
    };

    return Discussion;
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

coachApp.factory("discussions", function (Discussion, $http) {
    var discussionsArr = [];

    var addDiscussion = function (discussion) {
        discussion.startDate = formatDate(new Date());
        discussionsArr.push(discussion);
    };

    var addReply = function (reply, discussion) {
        var repliesArr = [];
        reply.startDate = formatDate(new Date());
        repliesArr.push(reply);
    };


    var load = function (discussionsPlainObjectArr) {
        for (var i = 0; i < discussionsPlainObjectArr.length; i++) {

            discussionsArr.push(new Discussion(discussionsPlainObjectArr[i]))
        }
    };

    var getCategories = function () {
        return $http.get("app/model/categories.json");
    }

    var getAll = function () {
        return discussionsArr;
    };

    var get = function (index) {
        return discussionsArr[index];
    };

    var removeAll = function () {
        discussionsArr = [];
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