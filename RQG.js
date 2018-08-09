$(document).ready(function(){
 //Ready Doc
//Random Number For Color Function
  function randomNum(){
    var random = Math.floor(Math.random() *255);
    return random;
  }




 //Get The Quote On Page Load
$.getJSON("https://talaikis.com/api/quotes/random/", function(data) {
      console.log(data);

 //Capitalize First Letter Of Category
  function titleCase(data) {
    var array = data.cat.toLowerCase().split(" ");
    var result = array.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join("");
  }

  //Replace Text With API Data
  $("#quote").text(`${data.quote}`);
   $("#author").text(`- ${data.author}`);
   var category = titleCase(data);
  $("#category").text("#" + category);

//End PageLoad GetJSON
});

  //Get A New Quote On Button Click
  $("#newQuote").on('click', function(){

 //JQuery Color Change Animation
  $( ".globalcolor" ).animate({
          backgroundColor: `"rgb(${randomNum()},${randomNum()},${randomNum()})"`}
          , 1000 );

    $.getJSON("https://talaikis.com/api/quotes/random/", function(data) {
      console.log(data);


  //Capitalize First Letter Of Category
   function titleCase(data) {
    var array = data.cat.toLowerCase().split(" ");
    var result = array.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join("");
  }
   $("#quote").text(`${data.quote}`);
   $("#author").text(`- ${data.author}`);
   var category = titleCase(data);
  $("#category").text("#" + category);

      //End GetJSON Function
    });


      // End #newQuote Click Function
  });


  // End Document Ready Function
});
