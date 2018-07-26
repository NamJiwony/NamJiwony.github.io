
var motivationalQuotes = [
 
  	 'Only I can change my life. No one can do it for me',
     'If you can dream it, you can do it',
     'The future belongs to those who believe in the beauty of their dreams',
     'Aim for the moon. If you miss, you may hit a star',
     'You just can n\’t beat the person who never gives up'
  
     ];


   
   function showQuote(){

   var randomQuote = motivationalQuotes[Math.floor(Math.random()*motivationalQuotes.length)];
    document.getElementById('quote').innerHTML = randomQuote;
}