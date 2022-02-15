const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// vars
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // first task is how to change the bkg when
    // button is clicked
    // first check that it works
    // console.log(document.body);

    // get a random number between 0 and 3
    // first hard code it like 2 to start dev 
    const randomNumber = getRandomNumber();
    console.log('randomNumber ' + randomNumber);

    // the page bg color
    document.body.style.backgroundColor = colors[randomNumber];
    // the color name value gets updated as well
    color.textContent = colors[randomNumber];

});

function getRandomNumber(){
    // getting unique num between 0 and .99999
    // then * the array length = 4 = 3.9999
    // then we need to find the floor of number 
    // always rounds DOWN... floor gives us 0-3 number
    return Math.floor( Math.random() * colors.length ); 
}