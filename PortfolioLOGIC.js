
// Funtcion to show the About me Grid for Skill, Experience & Education

function openTab(tabId) {
    let tab_links = document.getElementsByClassName("tab-links");
    let tabs = document.getElementsByClassName("tabs");

    for (tab_link of tab_links) {
        tab_link.classList.remove("active-link");
    }

    for (tab of tabs) {
        tab.classList.remove("active-tab");
    }
    let tabID = document.getElementById(tabId);
    event.target.classList.add("active-link");
    tabID.classList.add("active-tab");
}

// Burger menu open and close functions

function openmenu() {
    sidemenu.style.right = "0";
    bar.style.visibility = "hidden";
}
function closemenu() {
    sidemenu.style.right = "-200px";
    bar.style.visibility = "visible";
}

// Sending e-mail from form

function emailSend() {
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var messageBody = "Name: " + userName + "<br/> Email: " + email + "<br/>Message: " + message;
    var msg = document.getElementById('sent');
    Email.send({
        SecureToken: "283c71ff-4fea-45af-baa8-26734a8d1513",
        To: "risingsheikh@gmail.com",
        From: "risingsheikh@gmail.com",
        Subject: "Umar's Portfolio Message",
        Body: messageBody

    }).then(
        message => {
            msg.innerHTML = "Message Sent";
            setTimeout(function () {
                msg.innerHTML = ""
            }, 2000)
        }
    );
}

// fucntion to show and hide back to top button
function backToTop() {
    let topBtn = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            topBtn.classList.add("active");
        } else {
            topBtn.classList.remove("active");
        }
    });
}

function main() {

    // Closing burger menu when a click is registered from outside of it
    let sidemenu = document.getElementById("sidemenu");
    let bar = document.getElementById("bar");
    let cross = document.getElementById("cross");
    document.addEventListener("click", (event) => {
        if (!sidemenu.contains(event.target) && !cross.contains(event.target) && !bar.contains(event.target)) {
            closemenu();
        }
    });

    // Slider for my work projects slide through using Swiper API
    var TrandingSlider = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 30,
            modifier: 2.5,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    backToTop();

}
main();