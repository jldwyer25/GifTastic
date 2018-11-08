var topics = ["skateboarding","soccer","tennis","football","baseball","swimming"];

for(var i=0;i<topics.length;i++){
    $("#topic-buttons").append('<button id="add-gif" data-name="' + topics[i] + '">' + topics[i]);
};

var topicsArray = $("#to-do").val();


// topics = $("<button>");
// $("#to-do").append(topics);
// function array(){
// toDoArray.push(toDoTask);




$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var gifName = $(this).val("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      gifName + "&api_key=dc6zaTOxFJmzC&limit=1";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
    
});



