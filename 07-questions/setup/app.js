// using selectors inside the element

const questions = document.querySelectorAll('.question');
console.log(questions);

questions.forEach(function (question){
    // gets the specific button
    // console.log(question);
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function(e){
        
        // again loop through each of the questions
        // and see if is equal to the one our
        // button is currently within
        // close out other expanded articles
        questions.forEach(function (item){
            console.log(item);
            if(item !== question){
                item.classList.remove('show-text');
            }
        });
        
        
        question.classList.toggle('show-text');


    });
});






// traverse the dom way...
/*
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn){

    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.parentElement.parentElement);
        const question = e.currentTarget.parentElement.parentElement;
        
        // this css will show the text and the minus icon
        question.classList.toggle('show-text');

    });

});
*/