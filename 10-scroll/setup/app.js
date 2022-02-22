// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// ********** open close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
        // linksContainer.style.height = linksHeight + 'px';
    } else {
        linksContainer.style.height = 0;
    }
});



// ********** fixed navbar ************
const navBar = document.getElementById('nav');
const backToTopLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 300){
        backToTopLink.classList.add('show-link');
    } else {
        backToTopLink.classList.remove('show-link');
    }

    // console.log(window.pageYOffset);

})

// ********** smooth scroll ************

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        // prevent default
        e.preventDefault();

        // nav to specific section
        // slice(1) cuts off the hashtag
        const id = e.currentTarget.getAttribute('href').slice(1); //#tours
        const element = document.getElementById(id); //tours


        // calculate the heights to get our correct position
        const navHeight = navBar.getBoundingClientRect().height;
        console.log('navHeight ' + navHeight);

        // this holds the links and on mobile it's tall
        const containerHeight = linksContainer.getBoundingClientRect().height;
        console.log('containerHeight ' + containerHeight);

        // true / false if the fixedNav class in in the navBar
        const fixedNav = navBar.classList.contains('fixed-nav');
        console.log('fixedNav ' + fixedNav);
        
        // element.offsetTop then we subtract the 
        // current nav height (82)
        let position = element.offsetTop - navHeight;
        console.log('org position ' + position);

        // if fixedNav nav is showing
        // which is only on desktop when at
        // the very top of the page - the clear version
        if(!fixedNav){ // false as fixedNav is only set form mobile
            position = position - navHeight;
        }
        console.log('desktop position ' + position);


        // for smaller screen we check if the menu is open
        // which it should be on small screens as that's
        // the only way to click on link other than center button
        // so we need to add the links containerHeight
        // as well to get to correct position
        if(navHeight > 82){ // already opened the links
            position = position + containerHeight;
        }
        console.log('mobile postion ' + position);

        window.scrollTo({
            left:0,
            top: position,
        });

        // once we are scrolled to change the links container to 0
        linksContainer.style.height = 0;
    });

})



// select links
