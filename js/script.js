/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

const quotes =[
    
    {'quote':'To get the full value of a joy. You must have somebody to divide it with.', 
    'source': 'Mark Twain',
    'citation': 'Following the Equator: A Journey Around the World' ,
    'year': '1897'}, 
    
    {'quote': 'Keep your face to the sunshine and you cannot see a shadow', 
    'source': 'Helen Keller', 
    'citation': 'Out of the Dark', 
    'year': '1913'},

    {'quote': 'The greatest happiness is the happiness that comes as a by-product of striving to do what must be done, even though sorrow is met in the doing.', 
    'source': 'Theodore Roosevelt',
    'citation': 'An Autobiography', 
    },

    {'quote': 'Blessed is the influence of one true, loving human soul on another.', 
    'source': 'George Eliot', 
    'year': '1960'},

    {'quote': 'Stay hungry. Stay foolish.', 
    'source': 'Steve Jobs',
    'citation': 'Whole Earth Catalog', 
    'year': '1974'},

    {'quote': 'It takes courage to love, but pain through love is the purifying fire which those who love generously know.', 
    'source': 'Eleanor Roosevelt',
    'citation': 'My Day', 
    'year': '1935' }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote()
{   
    //get random number from 0 to 5
    let randomNum= Math.floor(Math.random() * 6);
    return quotes[randomNum];
}


/***
 * `printQuote` function
***/
let tempquote;
function printQuote()
{
   
    
        do{
        const randquote= getRandomQuote();
        }while(quotes.indexOf(randquote)!= quotes.indexOf(tempquote));
        //check if the quote selected is not repeated:
        //if the index of randquote is not same as the index of last array stored in tempquote
        
        //if(quotes.indexOf(randquote)!= quotes.indexOf(tempquote))
       // {
            //select the tag with 'quote' class
            //set the text inside the <p></p> is the selected quote
            const pquote= document.querySelector('.quote')
            pquote.innerText=randquote.quote;

            //select the tag with 'source' class
            //set the text inside the <p></p> is the source of selected quote
            const psource=document.querySelector('.source')
            psource.innerHTML= randquote.source 
            
            //add the citation to the <p></p> with source if the selected quote has citation property
            if(randquote.hasOwnProperty('citation'))
            {
                psource.innerHTML +='<span class="citation">'+randquote.citation+'</span>'
            }
            
            //add the year to the <p></p> with source if the selected quote has year property
            if(randquote.hasOwnProperty('year'))
            {
                psource.innerHTML +='<span class="year">'+randquote.year+'</span>';
            }


        //}
       // else //if the index of randquote is same as the index of last array stored in tempquote
            // run the function again
       // {
            //printQuote();
      //  }
        

        tempquote=randquote;

}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

const button = document.getElementById('load-quote')
button.addEventListener("click", printQuote);
