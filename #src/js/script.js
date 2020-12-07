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











@@include('webpSupport.js')