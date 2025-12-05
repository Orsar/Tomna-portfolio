
// bars








const menu = document.querySelector('.menu'); 
const bars = document.querySelector('.bars');
const menuLinks = document.querySelectorAll('.menu li a');

// Toggle menu visibility on hamburger click
bars.addEventListener('click', () => {
    menu.classList.toggle('show');
    bars.style.display = menu.classList.contains('show') ? 'none' : 'block';
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
        bars.style.display = 'block'; // show hamburger again
    });
});



 //  show skills 
let skillsBtn = document.querySelector('.js-skills-btn')
let skillsDet = document.querySelector('.js-about-bottom')



skillsBtn.addEventListener('click',()=>{
    skillsDet.classList.toggle('show-skills')
});


//skicky nav

let nav = document.querySelector('nav')

window.addEventListener('scroll', ()=>{
   if(window.scrollY > 100){
    nav.classList.add('skicky-nav')
   }else{
    nav.classList.remove('skicky-nav')
   }
});


// Testimonial swiper
//var swiper = new Swiper('.testSwiper' ,{
   // slidesPerView: 1,
//});

const wrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    let index = 0;
    const total = slides.length;

    function showNextSlide() {
        index++;
        if(index >= total) index = 0;
        wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto slide every 3 seconds
    setInterval(showNextSlide, 3000);

// Portfolio filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-img');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filter = button.dataset.filter;

    portfolioItems.forEach(item => {
      const category = item.dataset.category;
      if (filter === 'all' || category === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});


//MIXUP FILTERS

  document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.category button');
  const portfolioItems = document.querySelectorAll('.portfolio-img');

  if (!filterButtons.length || !portfolioItems.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';

      portfolioItems.forEach(item => {
        const category = item.dataset.category;

        if (filter === 'all' || filter === category) {
          item.style.display = '';    // use your CSS default
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});


// Hire Me Modal
const hireBtn = document.querySelector('.hire-me button');
const hireModal = document.querySelector('.hireme-modal');
const hireClose = document.querySelector('.hireme-close');

// Open modal
hireBtn.addEventListener('click', () => {
  hireModal.style.display = 'flex';
  setTimeout(() => hireModal.classList.add('show'), 10);
});

// Close modal
hireClose.addEventListener('click', () => {
  hireModal.classList.remove('show');
  setTimeout(() => hireModal.style.display = 'none', 300);
});

// Close modal if clicked outside content
hireModal.addEventListener('click', (e) => {
  if(e.target === hireModal){
    hireModal.classList.remove('show');
    setTimeout(() => hireModal.style.display = 'none', 300);
  }
});


// contact

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission

  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const subject = encodeURIComponent(contactForm.subject.value);
  const message = encodeURIComponent(
    `Hi Orsar,%0A%0A${contactForm.message.value}%0A%0AFrom: ${name} (${email})`
  );

  // Gmail compose URL
  const mailUrl = `https://mail.google.com/mail/?view=cm&to=orsar.orsarba@gmail.com&su=${subject}&body=${message}`;

  window.open(mailUrl, '_blank'); // open Gmail in a new tab
});
