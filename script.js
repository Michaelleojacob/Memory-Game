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

//get 8x2 cards
function getGifs() {
    $.ajax({
        method: "GET",
        url: queryUrl
    }).then(function(response) {
        console.log(response);
        for (var i = 0; i < 8; i++) {
            imgURLs.push(response.results[i].image)
            imgURLs.push(response.results[i].image)
        }
        
        shuffle(imgURLs);
        addImagesToTiles();

    });
}

getGifs();


function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

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

function addImagesToTiles(){
    $("button.tile").each(function(){
        console.log(this);
        //this is where we add them to the html!
        //!!!** cworking movie app UNIT 6 **!!!
    })
}

