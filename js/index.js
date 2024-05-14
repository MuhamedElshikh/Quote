var quote =["Be yourself; everyone else is already taken Oscar Wilde","“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me","So many books, so little time.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","A room without books is like a body without a soul","Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.","You know you're in love when you can't fall asleep because reality is finally better than your dreams."]
var author = ["Oscar Wilde","Marilyn Monroe","Frank Zappa","Albert Einstein","Marcus Tullius Cicero","Bernard M. Baruch","William W. Purkey","Dr. Seuss"]
var randomindexv = []
var quoteinbut = document.getElementById("quote")
var authorinbut = document.getElementById("author")
var quoteAdd = document.getElementById("quote-add")
var authorAdd = document.getElementById("author-add")
function random(){
    if (randomindexv.length==quote.length)
    {
        quoteinbut.innerHTML="plz reload"
        authorinbut.innerHTML=""   
    }
    else{
    var randomindex; 
for(i=0;i<quote.length;i++)
{
randomindex= Math.floor(Math.random()*quote.length);
    if(!randomindexv.includes(randomindex)){
        break;
    }  
}
var quotes = quote[randomindex];
var authors = author[randomindex]
disblay(quotes,authors)
randomindexv.push(randomindex)

}
}
function disblay(x,y){
    quoteinbut.innerHTML = x
    authorinbut.innerHTML= y
}
function ubdate(){
   var a =quoteAdd.value;
   var b = authorAdd.value;
   quote.push(a)
   author.push(b)
   clear()
}
function clear(){
    quoteAdd.value = null
    authorAdd.value = null
}