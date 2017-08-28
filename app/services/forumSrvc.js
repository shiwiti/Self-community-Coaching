// Shared Discussion Constructor
coachApp.factory("Discussion", function () {
    function Discussion(plainObject) {
        this.startDate = plainObject.startDate;
        this.section = plainObject.section; //target Or Vision
        this.name = plainObject.name;
        this.category = plainObject.category;// אישי-מקצועי-חברתי-חדש
        this.author = plainObject.author;        
        this.content = plainObject.content;  
        this.replyIndex = plainObject.replyIndex // בדיון ללא תגובות = 0
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
        discussion.replyIndex=0;
        discussionsArr.push(discussion)
    };

    var addReply = function (index,reply) { //index=discussionIndex
        // var repliesArr = [];// (?)
        discussion.replyIndex++;
        
        discussion.replyIndex.startDate = formatDate(new Date());
        // discussion.replyIndex.content = // @ reply.js

        discussionsArr[index] = discussion;
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
        addDiscussion: addDiscussion,
        addReply: addReply,
        // remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        getCategories: getCategories
    };
});