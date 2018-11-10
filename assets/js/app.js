var topics = ["skateboarding","soccer","tennis","football","baseball","swimming"];

//create a for loop that converts any user input into data-name to pull gifs
function displayArray(){
for(var i=0;i<topics.length;i++){
    $("#topic-buttons").append('<button id="gif-button" data-name="' + topics[i] + '">' + topics[i]);
};
};
var topicsArray = $("#to-do").val();
displayArray();



$("#add-gif").on("click", function(event) {
    event.preventDefault();
    $("#topic-buttons").empty();
    topics.push($("#gif-input").val());
      displayArray();
});

$("#gif-button").on("click", function(){
var gifName = $(this).val("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      gifName + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response){
        console.log(queryURL);
        console.log(response);
        //Gif API data appears, need to push to page
          var results = response.data;
          for(var i=0;i<results.length;i++);

      })

    });
