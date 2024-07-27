
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

    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing the element once it is visible
                }
            });
        }, observerOptions);
    
        const elementsToAnimate = document.querySelectorAll('.hidden');
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }); 
    


    // document.addEventListener("DOMContentLoaded", () => {
    //     const items = document.querySelectorAll('.hidden');
    //     items.forEach((item, index) => {
    //         setTimeout(() => {
    //             item.classList.add('visible');
    //         }, index * 1000); // Increase the delay interval to 1000ms (1 second) for each subsequent item
    //     });
    // });
    

        // ===========================================================================
        function toggleReadMore() {
            var moreText = document.getElementById("moreText");
            var readMoreBtn = document.querySelector(".read");
        
            if (moreText.classList.contains("hidden-more")) {
                moreText.classList.remove("hidden-more");
                readMoreBtn.textContent = "READ LESS";
            } else {
                moreText.classList.add("hidden-more");
                readMoreBtn.textContent = "READ MORE";
            }
        }
        
        

        function openPopSheet() {
            document.getElementById("popSheet").style.display = "block";
        }
        
        function closePopSheet() {
            document.getElementById("popSheet").style.display = "none";
        }



        // document.addEventListener('DOMContentLoaded', function() {
        //     const navbar = document.querySelector('.navbar');
        //     const homeSection = document.getElementById('home');
        
        //     // Update navbar background on scroll
        //     window.addEventListener('scroll', function() {
        //         const scrollTop = window.scrollY;
        //         const homeOffset = homeSection.offsetTop;
        
        //         // Check if scrolled to the home section or below
        //         if (scrollTop < homeOffset + homeSection.offsetHeight) {
        //             navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Transparent white for home section
        //         } else {
        //             navbar.style.backgroundColor = '#000'; // Black for other sections
        //         }
        //     });
        // });

   