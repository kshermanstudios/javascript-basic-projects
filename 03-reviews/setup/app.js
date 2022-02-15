// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


// Select Items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// buttons
const prevBut = document.querySelector('.prev-btn');
const nextBut = document.querySelector('.next-btn');
const randomBut = document.querySelector('.random-btn');

// Could also get the buttons like this
// const btns = document.querySelectorAll('.prev-btn, .next-btn, .random-btn')

// Set stargin Item
let currentReview = 0;

// Load init items
window.addEventListener('DOMContentLoaded', function (){
  showPerson(currentReview);
});

// show person based on item
function showPerson(){
  // access the first array items
  // assign it to a var first
  const item = reviews[currentReview];
  console.log('person ' + currentReview);
  console.log('item ' + item);

  // update page content via the array data
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show Next Person
nextBut.addEventListener('click', function(){
  currentReview++;
  if(currentReview > reviews.length - 1){
    currentReview = 0;
  }
  showPerson();
});

// Show Prev Person
prevBut.addEventListener('click', function(){
  currentReview--;
  if(currentReview < 0){
    currentReview = reviews.length - 1;
  }
  showPerson();
});

// Show Random Person
randomBut.addEventListener('click', function(){
  currentReview = Math.floor( Math.random() * reviews.length );
  if(currentReview == currentReview){
    currentReview = Math.floor( Math.random() * reviews.length );
  }
  showPerson();
});


