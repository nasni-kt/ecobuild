// // document.addEventListener('DOMContentLoaded', function () {
// //     const toggler = document.querySelector('.navbar-toggler');
// //     const closeIcon = document.querySelector('.navbar-toggler-close');
// //     const openIcon = document.querySelector('.navbar-toggler-open');

   
// //     function setInitialState() {
// //         if (toggler.classList.contains('collapsed')) {
// //             openIcon.classList.add('d-none');
// //             closeIcon.classList.remove('d-none');
// //         } else {
// //             openIcon.classList.remove('d-none');
// //             closeIcon.classList.add('d-none');
// //         }
// //     }

// //     setInitialState();

// //     toggler.addEventListener('click', function () {
// //         toggler.classList.toggle('collapsed');
// //         openIcon.classList.toggle('d-none');
// //         closeIcon.classList.toggle('d-none');
// //     });

    
//     // window.addEventListener('load', () => {
//     //     const hidden1Elements = document.querySelectorAll('.hidden1');
//     //     hidden1Elements.forEach((element, index) => {
//     //         setTimeout(() => {
//     //             element.classList.add('visible');
//     //         }, index * 200);
//     //     });

//     //     const hidden2Elements = document.querySelectorAll('.hidden2');
//     //     hidden2Elements.forEach((element, index) => {
//     //         setTimeout(() => {
//     //             element.classList.add('visible');
//     //         }, (hidden1Elements.length * 200) + (index * 200));
//     //     });
//     // });

//     // document.getElementById('infoButton').addEventListener('click', function () {
//     //     document.getElementById('info').scrollIntoView({ behavior: 'smooth', block: 'start' });
//     // });

  
// //     document.querySelector('.readmore-btn a').addEventListener('click', function (event) {
// //         event.preventDefault();
// //         var moreText = document.getElementById('moreText');
// //         if (moreText.classList.contains('hidden')) {
// //             moreText.classList.remove('hidden');
// //             this.textContent = 'READ LESS';
// //         } else {
// //             moreText.classList.add('hidden');
// //             this.textContent = 'READ MORE';
// //         }
// //     });
// // });

// // Validate and send email
// // function validateAndSendMail(event) {
// //     event.preventDefault();

// //     var name = document.getElementById('name').value.trim();
// //     var email = document.getElementById('email').value.trim();
// //     var number = document.getElementById('number').value.trim();
// //     var message = document.getElementById('message').value.trim();

// //     if (!name || !email || !number || !message) {
// //         alert('Please fill out all fields.');
// //         return false;
// //     }

// //     sendMail(name, email, number, message);
// //     return false;
// // }

// // function sendMail(name, email, number, message) {
// //     var params = {
// //         name: name,
// //         number: number,
// //         email: email,
// //         message: message
// //     };

// //     const serviceID = 'service_tn9r288';
// //     const templateID = 'template_1jdkxp6';

// //     emailjs.send(serviceID, templateID, params)
// //         .then((res) => {
// //             document.getElementById('name').value = '';
// //             document.getElementById('number').value = '';
// //             document.getElementById('email').value = '';
// //             document.getElementById('message').value = '';
// //             console.log(res);
// //             alert('Your message has been sent successfully!');
// //         })
// //         .catch((err) => {
// //             console.error('Error sending email:', err);
// //         });
// // }
// function toggleReadMore() {
//     var moreText = document.getElementById("moreText");
//     if (moreText.classList.contains("hidden")) {
//         moreText.classList.remove("hidden");
//     } else {
//         moreText.classList.add("hidden");
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const navbarToggler = document.querySelector(".navbar-toggler");
//     const navbarTogglerClose = document.querySelector(".navbar-toggler-close");
//     const navbarTogglerOpen = document.querySelector(".navbar-toggler-open");

//     navbarToggler.addEventListener("click", function () {
//         navbarTogglerClose.classList.toggle("d-none");
//         navbarTogglerOpen.classList.toggle("d-none");
//     });
// });
// // ============================================================================
// window.addEventListener('load', () => {
//     const hidden1Elements = document.querySelectorAll('.hidden1');
//     hidden1Elements.forEach((element, index) => {
//         setTimeout(() => {
//             element.classList.add('visible');
//         }, index * 200);
//     });

//     const hidden2Elements = document.querySelectorAll('.hidden2');
//     hidden2Elements.forEach((element, index) => {
//         setTimeout(() => {
//             element.classList.add('visible');
//         }, (hidden1Elements.length * 200) + (index * 200));
//     });
// });
// // ==============================================================================
// function validateAndSendMail(event) {
//         event.preventDefault();
    
//         var name = document.getElementById('name').value.trim();
//         var email = document.getElementById('email').value.trim();
//         var number = document.getElementById('number').value.trim();
//         var message = document.getElementById('message').value.trim();
    
//         if (!name || !email || !number || !message) {
//             alert('Please fill out all fields.');
//             return false;
//         }
    
//         sendMail(name, email, number, message);
//         return false;
//     }
    
//     function sendMail(name, email, number, message) {
//         var params = {
//             name: name,
//             number: number,
//             email: email,
//             message: message
//         };
    
//         const serviceID = 'service_tn9r288';
//         const templateID = 'template_1jdkxp6';
    
//         emailjs.send(serviceID, templateID, params)
//             .then((res) => {
//                 document.getElementById('name').value = '';
//                 document.getElementById('number').value = '';
//                 document.getElementById('email').value = '';
//                 document.getElementById('message').value = '';
//                 console.log(res);
//                 alert('Your message has been sent successfully!');
//             })
//             .catch((err) => {
//                 console.error('Error sending email:', err);
//             });
//     }
//     // ===================================================================
//     document.addEventListener('DOMContentLoaded', function () {
//             const toggler = document.querySelector('.navbar-toggler');
//             const closeIcon = document.querySelector('.navbar-toggler-close');
//             const openIcon = document.querySelector('.navbar-toggler-open');
        
           
//             function setInitialState() {
//                 if (toggler.classList.contains('collapsed')) {
//                     openIcon.classList.add('d-none');
//                     closeIcon.classList.remove('d-none');
//                 } else {
//                     openIcon.classList.remove('d-none');
//                     closeIcon.classList.add('d-none');
//                 }
//             }
        
//             setInitialState();
        
//             toggler.addEventListener('click', function () {
//                 toggler.classList.toggle('collapsed');
//                 openIcon.classList.toggle('d-none');
//                 closeIcon.classList.toggle('d-none');
//             });
//         });
//     // document.addEventListener('DOMContentLoaded', function () {
//     //     const toggler = document.querySelector('.navbar-toggler');
//     //     const closeIcon = document.querySelector('.navbar-toggler-close');
//     //     const openIcon = document.querySelector('.navbar-toggler-open');
    
//     //     toggler.addEventListener('click', function () {
//     //         closeIcon.classList.toggle('d-none');
//     //         openIcon.classList.toggle('d-none');
//     //     });
//     // });
//     function toggleNavbarBg() {
//         var navbar = document.querySelector('.navbar');
//         var navbarNav = document.querySelector('#navbarNav');
    
//         // Check if the navbar is expanded or collapsed
//         if (navbarNav.classList.contains('collapsed')) {
//             // If expanded, remove the background color
//             navbar.classList.remove('bg-color');
//         } else {
//             // If collapsed, add the background color
//             navbar.classList.add('bg-color');
//         }
//     }
    

















    function scrollToInfo() {
        var element = document.getElementById("info");
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
   
    
    function validateAndSendMail(event) {
        event.preventDefault();
    
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var number = document.getElementById('number').value.trim();
        var message = document.getElementById('message').value.trim();
    
        if (!name || !email || !number || !message) {
            alert('Please fill out all fields.');
            return false;
        }
    
        sendMail(name, email, number, message);
        return false;
    }
    
    function sendMail(name, email, number, message) {
        var params = {
            name: name,
            number: number,
            email: email,
            message: message
        };
    
        const serviceID = 'service_tn9r288';
        const templateID = 'template_1jdkxp6';
    
        emailjs.send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById('name').value = '';
                document.getElementById('number').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
                console.log(res);
                alert('Your message has been sent successfully!');
            })
            .catch((err) => {
                console.error('Error sending email:', err);
            });
    }
    // ===========================================================================
    // document.addEventListener('DOMContentLoaded', function () {
    //     const toggler = document.querySelector('.navbar-toggler');
    //     const closeIcon = document.querySelector('.navbar-toggler-close');
    //     const openIcon = document.querySelector('.navbar-toggler-open');
    
    //     toggler.addEventListener('click', function () {
    //         closeIcon.classList.toggle('d-none');
    //         openIcon.classList.toggle('d-none');
    //     });
    // });
    
    // ===========================================================================
    
    window.addEventListener('load', () => {
        const hidden1Elements = document.querySelectorAll('.hidden1');
        hidden1Elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 200);
        });
    
        const hidden2Elements = document.querySelectorAll('.hidden2');
        hidden2Elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, (hidden1Elements.length * 200) + (index * 200));
        });
    });
        // ===========================================================================
    function toggleReadMore() {
        var moreText = document.getElementById("moreText");
        if (moreText.classList.contains("hidden")) {
            moreText.classList.remove("hidden");
        } else {
            moreText.classList.add("hidden");
        }
    }
    