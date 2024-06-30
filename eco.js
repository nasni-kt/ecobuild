function scrollToInfo() {
    var element = document.getElementById("info");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}

// function sendMail(){
//     var params={
//         name:document.getElementById("name").value ,
//         number:document.getElementById("number").value ,
//         email:document.getElementById("email").value ,
//         message:document.getElementById("message").value
//     };
 
//     emailjs.send("service_yym9lej","template_koflsmw",params).then(alert("email send!!"))
// }

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_yym9lej", "template_koflsmw", params)
        .then(function (res) {
            document.getElementById("name").value = "";
            document.getElementById("number").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message has been sent successfully!");
        })
        .catch(function (err) {
            console.error("Error sending email:", err);
            alert("There was an error sending your message. Please try again later.");
        });
}

// ===========================================================================
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".navbar");
    var infoSection = document.getElementById("info");

    if (navbar && infoSection) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    navbar.classList.add("transparent-bg");
                } else {
                    navbar.classList.remove("transparent-bg");
                }
            });
        }, { threshold: [0.1] });

        observer.observe(infoSection);
    }
});



window.addEventListener('load', () => {
    // Select all elements with the hidden1 class
    const hidden1Elements = document.querySelectorAll('.hidden1');
    hidden1Elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200); // Adjust delay as needed
    });

    // Select all elements with the hidden2 class
    const hidden2Elements = document.querySelectorAll('.hidden2');
    hidden2Elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, (hidden1Elements.length * 200) + (index * 200)); // Adjust delay as needed
    });
});
// ==========================================================================================
function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var readMoreBtn = document.querySelector(".readmore-btn a");
    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        readMoreBtn.textContent = "READ LESS";
    } else {
        moreText.classList.add("hidden");
        readMoreBtn.textContent = "READ MORE";
    }
}
