//var main = function () {
    "use strict";
    var app = angular.module("myApp", []);

    app.controller("commentor", function($scope) {
        $scope.lastName = "Doe";
        $scope.list=[
            "This is the first comment",
            "Here's the second comment",
            "And this is one More",
            "Here is another one"]; 

        $scope.insert = function(){
            if($scope.pushComment == null || $scope.pushComment == undefined )
                console.log("enter a comment");
            else {
                $scope.list.push($scope.pushComment);
            } 

        }
    });

    /*var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);*/