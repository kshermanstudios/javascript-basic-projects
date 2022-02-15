// set initial count
let count = 0;

// select value and buttons
// old way ... d
// document.getElementById('value');
const value = document.querySelector('#value');

// then we grab all the buttons
// this creates a nodelist which is 
// array 'like' so some methods will work like 'for each'
// more intense JS we would need to turn this into an actual array
const btns = document.querySelectorAll('.btn');
// console.log(btns);

btns.forEach(function(btn){

    // add event listener here
    // the e will check the event object
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList);

        // classList contains our classes
        // for the specific looped object we are on
        const styles = e.currentTarget.classList;

        // check each classList for specific item
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
            count++;
        } else {
            count = 0;
        }


        // change the value color based on neg/pos or reset
        if(count > 0) {
            value.style.color = 'green';
        } else if(count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }

        console.log(count);
        value.textContent = count;


    })

})
