$(document).ready(function () {
    gameOver();
})

$(function () {
    $(".input_field").keyup(function () {
        var id = $(this).attr("id")
        var inputText = id.split("_")[1]
        $(".rep_input").eq(inputText).html($(this).val())
    })

    $(".clickable").click(function () {
        var correctGuess = false()

        let id = $(this).attr("id");
    })

    var gameOver = false

    $(".clickable").click(function(){
        var correctGuess = false;

        let id = $(this).attr("id");

        var life = parseInt($("#life").text())

        for(var i = 0; i < randomWord.word.length; i++){
            if(randomWord.word.charAt(i).toLowerCase() == id){
                if(life > 0 && ($(".fill_blanks").eq(i).html() == "_"|| $(".fill_blanks").eq(i).html() == id)){
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    if($("#blanks").text() === randomWord.word.toLowerCase()){
                        $("#result").text("You Win!")
                        correctGuess = true;
                        gameOver = true
                    }
                }
            }
        }
    })
})
