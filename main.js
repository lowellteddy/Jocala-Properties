document.addEventListener('DOMContentLoaded', () => {
    // Function to handle navigation clicks
    const navLinks = document.querySelectorAll('aside li');
    const sections = document.querySelectorAll('.swiper-slide');
    const portfolioSection = document.querySelector('.events-page');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            // Remove 'activeLink' class from all links
            navLinks.forEach(link => link.classList.remove('activeLink'));
            // Add 'activeLink' class to the clicked link
            link.classList.add('activeLink');

            // Hide all sections
            sections.forEach(section => section.style.display = 'none');
            // Display the corresponding section
            sections[index].style.display = 'block';

            // Show or hide the portfolio section
            if (index === 3) { // Assuming index 3 corresponds to the portfolio section
                portfolioSection.style.display = 'block';
                playPortfolioVideo();
            } else {
                portfolioSection.style.display = 'none';
                pausePortfolioVideo();
            }
        });
    });

    // Initialize the first section as visible
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? 'block' : 'none';
    });

    // Function to handle form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const fullName = formData.get('full-name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (fullName && email && message) {
            // Simulate form submission
            alert(`Thank you, ${fullName}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Social media icon hover effect
    const socialLinks = document.querySelectorAll('.SocialLinks i');
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#176d2d';
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
        });
    });

    // Scroll down button visibility based on scroll position
    const scrollBtn = document.querySelector('.scrollBtn');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            scrollBtn.classList.add('move');
        } else {
            scrollBtn.classList.remove('move');
        }
    });

    // Preloader animation
    window.addEventListener('load', function () {
        const preloader = document.getElementById('preloader');
        const firstText = document.getElementById('first-text');
        const secondText = document.getElementById('second-text');

        firstText.style.opacity = '1'; // Show the first text
        setTimeout(function () {
            firstText.style.opacity = '0';
            secondText.style.opacity = '1'; // Show the second text
        }, 1000);
        setTimeout(function () {
            preloader.style.display = 'none'; // Hide the preloader
        }, 4000);
    });

    // Responsive loader video adjustments
    window.addEventListener('load', function () {
        const loaderVideo = document.getElementById('loaderVideo');
        setTimeout(function () {
            loaderVideo.style.width = '90%';
            loaderVideo.style.height = '90%';
            loaderVideo.style.transform = 'translate(-50%, -50%)';
            loaderVideo.style.top = '50%';
            loaderVideo.style.left = '50%';
            loaderVideo.style.position = 'fixed';
            loaderVideo.style.borderRadius = '12px';

            // Adjust video size based on screen width
            if (window.matchMedia('(max-width: 576px)').matches) {
                loaderVideo.style.width = '220px';
                loaderVideo.style.height = '220px';
                loaderVideo.style.top = '25%';
                loaderVideo.style.left = '24px';
                loaderVideo.style.right = 'auto';
                loaderVideo.style.transform = 'translate(0%, -25%)';
            } else if (window.matchMedia('(max-width: 767px)').matches) {
                loaderVideo.style.width = '220px';
                loaderVideo.style.height = '220px';
                loaderVideo.style.left = 'auto';
                loaderVideo.style.right = '40px';
                loaderVideo.style.transform = 'translate(0%, -50%)';
            } else if (window.matchMedia('(max-width: 991px)').matches) {
                loaderVideo.style.width = '310px';
                loaderVideo.style.height = '310px';
                loaderVideo.style.left = 'auto';
                loaderVideo.style.right = '40px';
                loaderVideo.style.transform = 'translate(0%, -50%)';
            } else if (window.matchMedia('(max-width: 1199px)').matches) {
                loaderVideo.style.width = '400px';
                loaderVideo.style.height = '400px';
                loaderVideo.style.left = 'auto';
                loaderVideo.style.right = '60px';
                loaderVideo.style.transform = 'translate(0%, -50%)';
            } else if (window.matchMedia('(max-width: 1399px)').matches) {
                loaderVideo.style.width = '450px';
                loaderVideo.style.height = '450px';
                loaderVideo.style.left = 'auto';
                loaderVideo.style.right = '80px';
                loaderVideo.style.transform = 'translate(0%, -50%)';
            } else {
                loaderVideo.style.width = '500px';
                loaderVideo.style.height = '500px';
                loaderVideo.style.top = '50%';
                loaderVideo.style.left = 'auto';
                loaderVideo.style.right = '100px';
                loaderVideo.style.transform = 'translate(0%, -50%)';
                loaderVideo.style.position = 'absolute';
            }

            document.body.classList.remove('overflow-hidden'); // Show scrollbars
            document.documentElement.classList.remove('overflow-hidden'); // Show scrollbars
        }, 2000); // Adjust the timing as needed
    });

    // Initialize ScrollMagic controller and scenes
    const controller = new ScrollMagic.Controller({ loglevel: 3 });

    // Scene to pin sections and enable scrolling
    new ScrollMagic.Scene({
        triggerElement: "#section1",
        triggerHook: 0,
        duration: '100%'
    })
    .setPin("#section1 .pinWrapper", {
        pushFollowers: false
    })
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#section2",
        triggerHook: 0,
        duration: '100%'
    })
    .setPin("#section2 .pinWrapper", {
        pushFollowers: false
    })
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#section3",
        triggerHook: 0,
        duration: '100%'
    })
    .setPin("#section3 .pinWrapper", {
        pushFollowers: false
    })
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#section4",
        triggerHook: 0,
        duration: '100%'
    })
    .setPin("#section4 .pinWrapper", {
        pushFollowers: false
    })
    .addTo(controller);

    // Function to play the portfolio video
    function playPortfolioVideo() {
        const video = document.querySelector('#loaderVideo video');
        if (video) {
            video.play();
        }
    }

    // Function to pause the portfolio video
    function pausePortfolioVideo() {
        const video = document.querySelector('#loaderVideo video');
        if (video) {
            video.pause();
        }
    }
});
