var imgURLs = []
var queryUrl = "https://rickandmortyapi.com/api/character/?count=16";
var firstOption;
var secondOption;
var preventSelected = false;
var get2Cards = []
var matchedCards = []



//function called getgifs to send the ajax rquest
function getGifs() {
    //sending the ajax call
    $.ajax({
        method: "GET",
        url: queryUrl
            //once the ajax call has loaded, then show the response
    }).then(function(response) {
        console.log(response);
        //get 8x2 cards
        //create a loop that gets exactly 8 cards
        //make 2 copies of each of those 8 cards
        for (var i = 0; i < 8; i++) {
            imgURLs.push(response.results[i].image)
            imgURLs.push(response.results[i].image)
        }
        //calling the function to shuffle the cards which were saved in an variable array named imgURLs
        shuffle(imgURLs);
        //calling function 
        startGame();
        //BE SURE TO REMOVE THIS CONSOLE LOG. 
        //this shows the random 
        console.log(imgURLs);

    });
}
//calling function
getGifs();

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


//here we are finally adding the randomly shuffled cards to the html
function startGame() {
    var newRow = $("<div>").addClass("row");
    for (var i = 0; i < 4; i++) {
        var newButton = $("<button>").addClass("box imageCover");
        var image = $("<img>")
        image.attr("src", imgURLs[i]);

        $(".grid").append(newRow);
        newRow.append(newButton);
        newButton.append(image);
    }
    var newRow2 = $("<div>").addClass("row")
    for (var i = 4; i < 8; i++) {
        var newButton2 = $("<button>").addClass("box imageCover");
        var image2 = $("<img>")
        image2.attr("src", imgURLs[i]);

        $(".grid").append(newRow2);
        newRow2.append(newButton2);
        newButton2.append(image2);
    }
    var newRow3 = $("<div>").addClass("row");
    for (var i = 8; i < 12; i++) {
        var newButton3 = $("<button>").addClass("box imageCover");
        var image3 = $("<img>")
        image3.attr("src", imgURLs[i]);

        $(".grid").append(newRow3);
        newRow3.append(newButton3);
        newButton3.append(image3);
    }

    var newRow4 = $("<div>").addClass("row");
    for (var i = 12; i < 16; i++) {
        var newButton4 = $("<button>").addClass("box imageCover");
        var image4 = $("<img>")
        image4.attr("src", imgURLs[i]);

        $(".grid").append(newRow4);
        newRow4.append(newButton4);
        newButton4.append(image4);
    }


    doWeHaveTwoCards();

    function doWeHaveTwoCards() {
        // When you click button.box
        $("button.box").on("click", function() {
            // The cover is removed from the one you click
            $(this).removeClass("imageCover").addClass("open");
            // **We then push the whole object of the one you click to the get2Cards array**
            get2Cards.push(($(this)))
            console.log(get2Cards)
                // Once 2 cards are selected
            if (get2Cards.length === 2) {
                // We call checkMatch passing the first index of get2Cards
                // and the current clicked option
                checkMatch(get2Cards[0], $(this));
            }
        })

    }


    // checkMatch takes two arguments.
    // selection1 = get2Cards[0]
    // selection2 = $(this) from above (most recently clicked option)
    // Both params are the entire object 
    function checkMatch(selection1, selection2) {

        console.log("selection1", selection1[0])
        console.log("selection2", selection2[0])
            // If the innerHTML (the <img>) of selection1 at index[0]
            // is the same as the innerHTML (the <img>) of selection2
        if (selection1[0].innerHTML === selection2[0].innerHTML) {
            // Then just return true, nothing needed. 
            // Even returning true isn't really needed but hey, fuck it
            console.log("correct")
                // Clear get2Cards so that we can run doWeHaveTwoCards again
            get2Cards = [];
            // disable the possibility for the user to reselect prior choices
            $(selection1[0]).attr("disabled", true)
            $(selection2[0]).attr("disabled", true)
            return true
                // If the innerHTML. .. 
        } else if (selection1[0].innerHTML !== selection2[0].innerHTML) {
            setTimeout(function() {
                console.log("selection1", selection1[0].innerHTML)

                console.log("selection2", $(selection2[0]).innerHTML)
                    // We set selection1 to selection1 at index[0] to explore the object
                selection1 = selection1[0]
                    // We change the <button>'s class to include imageCover
                $(selection1).addClass("imageCover")
                    // Same thing here with selection2
                selections2 = selection2[0]
                $(selection2).addClass("imageCover")
                    // Clear get2Cards so that we can run doWeHaveTwoCards again
                get2Cards = []
                console.log(get2Cards);
                return false
            }, 500);
            console.log("incorrect")
                // get2Cards = [];
        }



    }





}