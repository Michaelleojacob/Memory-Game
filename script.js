var imgURLs = []
var queryUrl = "https://rickandmortyapi.com/api/character/?count=16";
var firstOption;
var secondOption;
var preventSelected = false;


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

    var get2Cards = []
    var cardsURL = $("button.box")[0].innerHTML
    var len = get2Cards.length;


    // click listerner/ event targer for firstOption
    // handler function
    // check if anything is selected else assign clicked img to firstSelection
    // if preventSelected is true
    // assign next img selected to secondSelection
    // if firstSelection is and secondSelection is true
    // check if firstSelection === secondSelection
    // leave show class on
    // else remove show class



    function doWeHaveTwoCards() {

        $("button.box").on("click", function () {
            $(this).removeClass("imageCover");
            get2Cards.push(($(this)[0].innerHTML))
            get2Cards.length = Math.min(get2Cards.length, 2);
            // console.log(get2Cards);
            // if (len === 2) {

            // }
            checkMatch();
        })
    }

    function checkMatch() {
        console.log(get2Cards[0])
        console.log(get2Cards[1])
        var firstOption = get2Cards[0];
        var secondOption = get2Cards[1];
        if (firstOption === secondOption) {
            console.log("correct")

        }
        else {
            console.log("incorrect")

        }


        // if (get2Cards[0] !== get2Cards[1]) {
        //     setTimeout(function() {
        //         $("button.box").addClass("imageCover");
        //     }, 2000);
        // }
        // else if (get2Cards[0] === get2Cards[1]) {
        //     $("button.box").removeClass("imageCover");
        // }

    }




    // function handler() {
    //     $(document).on("click", function(event) {
    //       const selected = event.target.closest("img");
    //       console.log( selected);
    //       if (selected === undefined || preventSelected) {
    //         return;
    //       }
    //       if (firstBox === undefined) {
    //         firstBox = selected;
    //         showBox(selected);
    //         return;
    //       }

    //       if (secondBox === undefined) {
    //         preventSelected = true;
    //         secondBox = selected;
    //         showBox(selected);
    //         checker();
    //       }
    //     });
    //   }


}
















