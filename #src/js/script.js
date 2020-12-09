'use strict'

//links with params
const getLinkWithParams = document.querySelectorAll('.get-link');

if (getLinkWithParams.length > 0) {
  getLinkWithParams.forEach(item => {
    item.setAttribute('href', item.getAttribute('href') + window.location.search);
  });
}

//mobile links
const isMobile = () => {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
};

const hasRegistrationLink = isMobile()
  ? 'https://m.maxline.by/register'
  : 'https://maxline.by/user/signup';


const regLinks = document.querySelectorAll('.reg-link');
regLinks.forEach(link => {
  link.setAttribute('href', hasRegistrationLink);
});


//modal 
const modalTrigger = document.querySelector('.hero__info');
const modal = document.querySelector('.modal');

function toggleModal() {
  modal.classList.toggle('active');

  const modalClose = document.querySelector('.modal-info__close');
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}

modalTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleModal();
});

document.addEventListener('click', e => {
  let target = e.target;
  let isModal = target == modal;
  let isTrigger = target == modalTrigger;
  let menuIsActive = modal.classList.contains('active');
  if (isModal && !isTrigger && menuIsActive) {
    toggleModal();
  }
});








@@include('webpSupport.js')