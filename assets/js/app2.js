$(function () {
    renderButtons(topics, "searchButtons", "#topicButtons");
})

var topics = ["Bobby Hill", "Morty", "Bart", "Flapjack", "Spongebob", "Steve Smith"];

//create a for loop that converts any user input into buttons

function renderButtons(topics, gifClass, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < topics.length; i++) {
        var b = $("<button>");
        b.addClass(gifClass);
        b.attr("data-type", topics[i]);
        b.text(topics[i]);
        $("#topicButtons").append(b);
    }
}


$(document).on("click", ".searchButtons", function () {
    // $("#gifDump").empty();
    var type = $(this).data("type");
    console.log(type);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        type + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"})
        .then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                var gifDiv = $("<div class='gif-item'>");
                var rating = response.data[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var image = $("<img>");
                image.attr("src", still);
                image.attr("data-still", still);
                image.attr("data-animated", animated);
                image.attr("data-state", "still");
                image.addClass("searchImage");
                gifDiv.append(p);
                gifDiv.append(image);
                $("#gifDump").prepend(gifDiv);
            }
        })

})

$(document).on("click", ".searchImage", function () {
    var state = $(this).attr("data-state");
    if (state == "still") {
        $(this).attr("src", $(this).data("animated"));
        $(this).attr("data-state", "animated");
    } else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }

})

$("#addSearch").on("click", function () {
    event.preventDefault();
    var newGif = $("input").eq(0).val();
    topics.push(newGif);
    console.log(newGif);
    $("#topicButtons").empty();
    renderButtons(topics, "searchButtons", "#topicButtons");
    return false;
    
})


renderButtons(topics, "searchButtons", "#topicButtons");






// // TAKEN FROM WORKING MOVIE GIF

//     // function renderButtons() {

//     //     // Deleting the movies prior to adding new movies
//     //     // (this is necessary otherwise you will have repeat buttons)
//     //     $("#buttons-view").empty();

//     //     // Looping through the array of movies
//     //     for (var i = 0; i < movies.length; i++) {

//     //       // Then dynamicaly generating buttons for each movie in the array
//     //       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//     //       var a = $("<button>");
//     //       // Adding a class of movie-btn to our button
//     //       a.addClass("movie-btn");
//     //       // Adding a data-attribute
//     //       a.attr("data-name", movies[i]);
//     //       // Providing the initial button text
//     //       a.text(movies[i]);
//     //       // Adding the button to the buttons-view div
//     //       $("#buttons-view").append(a);
//     //     }
//     //   }

//     //   // This function handles events where a movie button is clicked
//     //   $("#add-movie").on("click", function(event) {
//     //     event.preventDefault();
//     //     // This line grabs the input from the textbox
//     //     var movie = $("#movie-input").val().trim();

//     //     // Adding movie from the textbox to our array
//     //     movies.push(movie);

//     //     // Calling renderButtons which handles the processing of our movie array
//     //     renderButtons();
//     //   });

//     //   // Adding a click event listener to all elements with a class of "movie-btn"
//     //   $(document).on("click", ".movie-btn", displayMovieInfo);

//     //   // Calling the renderButtons function to display the intial buttons
//     //   renderButtons();