const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// hex color example = #F1f5f8
// orang color : #f15025;
// so we want to create a loop that will create this 6 digit string
// and give each with a 0-9 or a letter
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor = '#';
    // then create a loop that will go for 6 times to match our hex length
    for(let i = 0; i < 6; i++){
        const randomNumber = getRandomNumber();
        const randomHexValue = hex[randomNumber];

        // hexColor += hex[3];
        hexColor += hex[getRandomNumber()];
        // hexColor = hexColor.concat(randomHexValue);
    }
    
    console.log('hexColor ' + hexColor);

    // the page bg color
    document.body.style.backgroundColor = hexColor;
    // the color name value gets updated as well
    color.textContent = hexColor;

});

function getRandomNumber(){
    return Math.floor( Math.random() * hex.length ); 
}