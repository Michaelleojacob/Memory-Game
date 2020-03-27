var imgURLs = []
var queryUrl = "https://rickandmortyapi.com/api/character/?count=16";
//array/variable for displayed cards
//variable for array of cards
//array of selected second cards
//else total attempts --
//if first card is selected, then select 2nd choice card
//loop through if first selected card == second selected card == then remain face up

//array
//create array
//shuffle array
// //loop over buttons
// EXAMPLE: $( "span" ).click(function() {
// EXAMPLE: $( "li" ).each(function() {
// EXAMPLE: $( this ).toggleClass( "example" );
//create new img elem and append to each button with a shuffled url
//remove item with array.pop()
//wait for user to click -- begin game

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
            imgURLs.push(response.results[i].image)
            imgURLs.push(response.results[i].image)
        }
        //calling the function to shuffle the cards which were saved in an variable array named imgURLs
        shuffle(imgURLs);
        //calling function 
        addImagesToTiles();
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
function addImagesToTiles() {
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

    $(".imageCover").click(function () {
        $(this).toggleClass("imageCover");
    });


}


