// get only unique categories - hardes part
// iteract over cats and return buttons
// make sure to select buttons when they are available 

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "spinach salad",
    category: "salads",
    price: 6.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  ,
  {
    id: 12,
    title: "pear salad",
    category: "salads",
    price: 7.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


// when page loads... access menu array and 
// add to the parent "section-center

const sectionCenter = document.querySelector('.section-center');
const buttonContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
  displayMenuButtons();
});



function displayMenuItems(menuItems){
  
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
              <img src="${item.img}" class="photo" alt="menu item" />
              <div class="item-info">
                <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
  });

  // remove the commas
  displayMenu = displayMenu.join(''); 

  sectionCenter.innerHTML = displayMenu;
  // console.log(displayMenu);

} // END displayMenuItems





function displayMenuButtons(){

  // get all
   /*
   const categories1 = menu.map(function(item){
    return item.category;
   });
   */
   // console.log(categories1);

 
   // set a reduce to get just our 5 diff buttons
   // takes 2 parameters, the function to perform and the 
   const categories2 = menu.reduce(
     function(difNames, item){
       // if the cat name IS NOT already in there then add
       // loops there all the items
       if(!difNames.includes(item.category)){
         difNames.push(item.category);
         // first item 'all' is already in there
       }
       return difNames;
     },
     ['all'] // pushing the first value - optional
   );
 
   
   // console.log(categories2);
   const categoryBtns = categories2.map(function(category){
     return `<button class="filter-btn" data-id="${category}">${category}</button>`;
   }).join('');
 
   // remove the commas above and insert
   buttonContainer.innerHTML = categoryBtns;
   const filterButtons = buttonContainer.querySelectorAll('.filter-btn');
   // console.log(filterButtons);
 
 
   // filter items
   filterButtons.forEach(function(btn){
 
    // when user clicks on any button
    btn.addEventListener('click', function(e){
       // console.log(e.currentTarget.dataset.id);
       // look for the dataset property of 'id'
       const catagory = e.currentTarget.dataset.id;
       
       // the 'menu' array above is filtered and we can use any name
       // creates a NEW array with specific filtered items
       const menuCategory = menu.filter(function(menuItem){
        // console.log(menuItem.category);
        if(menuItem.category === catagory){
          return menuItem;
        }
       });

    
       // console.log(menuCategory); // 3 items in array
       if(catagory === 'all'){
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
    });
 
   })

} // END displayMenuButtons