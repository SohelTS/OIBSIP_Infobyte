// Login 
const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// About Us 
const aboutUsButton = document.getElementById('aboutUsButton');
const aboutUsModal = document.getElementById('aboutUsModal');

aboutUsButton.addEventListener('click', (e) => {
    e.preventDefault();
    aboutUsModal.style.display = 'flex';
});

aboutUsModal.addEventListener('click', (e) => {
    if (e.target === aboutUsModal) {
        aboutUsModal.style.display = 'none';
    }
});

// Contact Us 
const contactUsButton = document.querySelector('a[href="#"]:nth-child(6)');
const contactUsModal = document.getElementById('contactUsModal');

contactUsButton.addEventListener('click', (e) => {
    e.preventDefault();
    contactUsModal.style.display = 'flex';
});

contactUsModal.addEventListener('click', (e) => {
    if (e.target === contactUsModal) {
        contactUsModal.style.display = 'none';
    }
});
