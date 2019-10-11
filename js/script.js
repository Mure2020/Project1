var quotes = [
  {
quote : "Be the change that you wish to see in the future.",
   source : "by Mahatma Gandhi.",
  },
{
quote :"If you look at what you have in life.you 'll always have more.",
  source :"by Oprah Winfrey.",
},
{
  quote : "This is the best time, when times are bad is when the real entrepreneurs emerge.",
  source : "by Robert T Kiyosaki",
  citation: "The business of the 21st Century",
  year: " 2013"
},
{
  quote : "Try to be a rainbow in someone else's cloud.",
  source : "by Maya Angelou.",
},
{
  quote : "It is never too late to be what you might have been.",
  source : " by George Eliot."
   }
  ];
  console.log(quotes);

// create the getRandomQuote function to generate random numbers and return random quotes


  function getRandomQuote(){

var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];

  }
  
  console.log(getRandomQuote());

  
// create the printQuote function, and call the getRandomQuote function, and assign it to a variable


  function printQuote(){
  
  var randomQuote = getRandomQuote();
 var HTML = '';
  HTML += '<p class = "quote">' + randomQuote.quote + '</p>';
  HTML += '<p class = "source">' + randomQuote.source


//if object has citation and year print them along with the source

if ( randomQuote.citation){

HTML += '<span class="citation">' + randomQuote.citation + '</span>'
  
} if (randomQuote.year) {
  HTML += '<span class ="year">' + randomQuote.year + '</span>'
}

HTML += '</p>';

 document.getElementById('quote-box').innerHTML = HTML;
  return HTML;
  }
   printQuote();
   console.log(printQuote());

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


