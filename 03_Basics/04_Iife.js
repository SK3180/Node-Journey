// Immediately Invoked funtion Expressions (IIFE)

(function chai()  // named IIFE as it has name
{
    console.log(`DB Connected`);
})(); // need to stop IIFE then we should use ; for end

( (name) => {  // simple IIFE as it doest have name
    console.log(`DB CONNECTED 2 ${name}`)
} )(`Sk Singh`)  

