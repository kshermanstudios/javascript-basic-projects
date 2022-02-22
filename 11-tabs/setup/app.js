const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
// main container
const about = document.querySelector('.about');

// add event here allows us to listen to everything
// clicked on within the parent container
about.addEventListener('click', function(e){
    // console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if(id){

        // remove active from all buttns
        btns.forEach(function(btn){
            btn.classList.remove('active');
        });
        // now set the specific button to show
        e.target.classList.add('active');



        // hide all articles
        articles.forEach(function(article){
            article.classList.remove('active');
        });

        // show specific article via it's id
        // get the specific element and then set it to active with class
        const elem = document.getElementById(id);
        elem.classList.add('active');

    }
});
