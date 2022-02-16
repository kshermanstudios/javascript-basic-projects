// classList - shows/gets all classes

// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
 
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('click', function(e){
    
    // console.log(links.classList.contains("show-links"));
    // console.log(links.classList.contains("links"));
    
    // check each classList for specific item
    /* full way

    if(links.classList.contains('show-links')){
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    }
    */

    links.classList.toggle("show-links");
   
});