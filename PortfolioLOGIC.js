var tab_links = document.getElementsByClassName("tab-links");
var tabs = document.getElementsByClassName("tabs");

function openTab(tabId) {
    for (tab_link of tab_links) {
        tab_link.classList.remove("active-link");
    }
    for (tab of tabs) {
        tab.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabId).classList.add("active-tab");
}

// optimized menu bar sidemenu
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
    // document.getElementById("bar").style.display = "none";
}
function closemenu() {
    sidemeu.style.right = "-200px";
    // document.getElementById("bar").style.display = "block";
}

// Sending mail from froms

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

