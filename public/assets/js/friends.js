var friends = require("../../../app/models/data/friends");

$(document).ready(function () {
    $("#submit-survey").on("click", function (event) {
        event.preventDefault();
        var userInput = {
            name: $("#nameInput").val().trim(),
            photo: 4("#linkInput").val(),
            scores: [$("#questions1").val(), $("#questions2").val(),
            $("#questions3").val(), $("#questions4").val(),
            $("#questions5").val(), $("#questions6").val(),
            $("#questions7").val(), $("#questions8").val(),
            $("#questions9").val(), $("#questions10").val()

            ]
        }
        $('#modal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })
    });
    // var show = function (object) {
    //     var string = "";

    //     for (var display in object) {
    //         if (typeof object[display] == "string") {
    //             string += display + ': ' + object[display] + '; </br>';
    //         } else {
    //             string += display + ': { </br>' + show(object[display]) + '}';
    //         }
    //     }

    //     return string;
    // }

    $(".modal-content").append(userInput);
    $.post("/aps/friends", userInput, function (data) {

    })
    $("#modal").modal("open");



});

