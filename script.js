var queryUrl = "https://rickandmortyapi.com/api/character/?count=16";

function getGifs() {
    $.ajax({
        method: "GET",
        url: queryUrl
    }).then(function(response) {
        console.log(response);
        for (i = 0; i < response.results.length; i++) {
            
            var gifs = $("<img>");
            gifs.attr("src", response.results[i].image)
            

            $("#placeholder").append(gifs);
        }
        
    });
}

getGifs();

