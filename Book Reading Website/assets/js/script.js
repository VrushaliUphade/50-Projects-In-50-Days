'use strict';



/**
 * add event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

// read now icon
document.querySelectorAll('.read-now-btn').forEach(button => {
  button.addEventListener('click', () => {
    const pdfPath = button.getAttribute('data-pdf');
    if (pdfPath) {
      window.open(pdfPath, '_blank');
    }
  });
});


//share icon

document.querySelectorAll('.action-btn[title="Share Book"]').forEach(button => {
  button.addEventListener('click', () => {
    // Set your book details here
    const bookTitle = "Atomic Habits";
    const pdfURL = "/50%20Days%2050%20Projects/Book%20Reading%20Website/assets/books/atomic-habits.pdf";
     // full link to your PDF file

    // Create message for WhatsApp
    const message = `Check out this book "${bookTitle}" to read online: ${pdfURL}`;

    // WhatsApp Web share link
    const whatsappLink = `https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    // Open in new tab
    window.open(whatsappLink, '_blank');
  });
});


//download icon
// document.querySelectorAll('.action-btn[title="Download Book"]').forEach(button => {
//   button.addEventListener('click', () => {
//     const filePath = "./assets/books/Atomic%20habits.pdf"; // update if dynamic
//     const fileName = "Atomic_Habits.pdf"; // optional custom file name

//     const link = document.createElement("a");
//     link.href = filePath;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   });
// });

document.querySelectorAll('.download-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filePath = button.getAttribute('data-pdf');
    const fileName = button.getAttribute('data-name') || 'Book.pdf';

    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});



//like icon 
document.querySelectorAll('.favorite-btn').forEach(button => {
  button.addEventListener('dblclick', () => {
    button.classList.toggle('active');

    const icon = button.querySelector('ion-icon');
    if (button.classList.contains('active')) {
      icon.setAttribute('name', 'heart'); // filled heart
    } else {
      icon.setAttribute('name', 'heart-outline'); // outline heart
    }
  });
});







/**
 * navbar toogle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);



/**
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);



/**
 * filter functionality
 */

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedBtn = filterBtn[0];

const filter = function () {
  lastClickedBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (filterItems[i].dataset.filter === this.dataset.filterBtn) {
      filterItems[i].style.display = "block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
}

addEventOnElem(filterBtn, "click", filter);