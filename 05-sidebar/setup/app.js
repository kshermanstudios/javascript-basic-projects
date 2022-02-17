const sideBarToggle = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');
const sideBard = document.querySelector('.sidebar');

sideBarToggle.addEventListener('click', function(){
    sideBard.classList.toggle("show-sidebar");
});

closeButton.addEventListener('click', function(){
    sideBard.classList.remove("show-sidebar");
});