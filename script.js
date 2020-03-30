var imgURLs = []
var queryUrl = "https://rickandmortyapi.com/api/character/?count=16";
var firstOption;
var secondOption;
var preventSelected = false;
var get2Cards = []
var counter = 0;
var ready = false
var highScore = JSON.parse(localStorage.getItem("highScore"));
var $winScreen = $("#win-screen");



if (highScore === null) {
    highScore = [1000]
} else {
    highScore = highScore.sort(function (a, b) {
        return a - b
    })
}



//calling function
getGifs();

$(document).on("click", "button.box", function () {

    if (ready) {
        // The cover is removed from the button you click
        $(this).removeClass("box-cover");
        $(this).find(".img-box").removeClass("img-hide")
        // **We then push the whole object of the one you click to the get2Cards array**

        get2Cards.push(this)

        if (get2Cards.length === 2) {
            // We call checkMatch passing the first index of get2Cards
            // and the current clicked option
            checkMatch();
        }
    } else {
        console.log("Timer not finished yet")
    }

})
$("#Reset").on("click", startGame)

//this piece of code is what shuffles the 8x2 cards and saves it as a function
function shuffle(arra1) {
    var ctr = arra1.length,
        temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

//function called getgifs to send the ajax rquest
function getGifs() {
    //sending the ajax call
    $.ajax({
        method: "GET",
        url: queryUrl
        //once the ajax call has loaded, then show the response
    }).then(function (response) {
        console.log(response);
        //get 8x2 cards
        //create a loop that gets exactly 8 cards
        //make 2 copies of each of those 8 cards
        for (var i = 0; i < 8; i++) {

            // create one instance of image object with all attributes
            const item = {
                url: response.results[i].image,
                id: i,
                matched: false
            }
            // inject above object into URL array twice.

            imgURLs.push(item, item)
        }

        //calling function 
        startGame();
        //BE SURE TO REMOVE THIS CONSOLE LOG. 
        //this shows the random 
        console.log(imgURLs);

    });
}

function checkMatch() {
    //set the selections as variables
    var selection1 = $(get2Cards[0]);
    var selection2 = $(get2Cards[1]);

    counter++


    $("#score").text(counter)
    $("#totalAttempts").text(counter);
    $("#bestScore").text(highScore[0]);


    // If the two cards are the same do the follwing 
    if (selection1.data("id") === selection2.data("id")) {
        console.log("correct")
        // Clear get2Cards so that we can run checkmatch again
        get2Cards = [];
        // disable the possibility for the user to reselect prior choices
        selection1.attr("disabled", true)
        selection2.attr("disabled", true)

        var isGameOver = true;
        for (var i = 0; i < imgURLs.length; i++) {
            if (imgURLs[i].id === selection1.data("id")) {
                console.log(selection1.data("id"))
                imgURLs[i].matched = true
            }
            if (imgURLs[i].matched === false) {
                isGameOver = false
            }
        }

        if (isGameOver) {

            //this is where we can direct to congrats page!
            renderWinScreen($winScreen);
            console.log("Game is over! You Win!")
            highScore.push(counter)
            localStorage.setItem("highScore", JSON.stringify(highScore.sort()))

        }



    } else {
        ready = false
        setTimeout(function () {
            ready = true
            //console.log("selection1", selection1)



            selection1.addClass("box-cover");
            selection1.find(".img-box").addClass("img-hide")

            selection2.addClass("box-cover");
            selection2.find(".img-box").addClass("img-hide")

            get2Cards = []
            console.log(get2Cards);
        }, 500);
        console.log("incorrect")
        // get2Cards = [];
    }
}

//here we are adding the randomly shuffled cards to the html
function startGame() {
    counter = 0;
    $winScreen.removeClass("visible");
    $("#score").text(counter)
    $("#high_score").text(highScore[0])
    $("#boxContainer").empty()
    //calling the function to shuffle the cards which were saved in an variable array named imgURLs
    shuffle(imgURLs);
    for (var i = 0; i < imgURLs.length; i++) {
        // initialize all elements to unmatched
        imgURLs[i].matched = false;
        var parent = $("<div>").addClass("col-3");

        // <button data-id="4" >Click</button>
        var newButton = $("<button>").addClass("box box-cover").data("id", imgURLs[i].id);
        var image = $("<img>").addClass("img-box img-hide").attr("src", imgURLs[i].url);
        var div = $("<div>").addClass("tile").append(image)
        newButton.append(div)
        parent.append(newButton)
        $("#boxContainer").append(parent)
    }

    ready = true


}

function renderWinScreen($winScreen) {
    setTimeout(function () {
        $winScreen.addClass("visible");
    }, 400);
}

