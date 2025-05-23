// Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });


        
const scriptURL = 'https://script.google.com/macros/s/AKfycbwJgvOAyE1S-AqoTwt9QN1s55d0iirm4nOEk6TrxsqgPI2GvUwz-1epum4U2Iv8LaFcSw/exec'

const form = document.forms['contactForm']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => response.json())
    .then(data => {
      console.log('Server response:', data)
      alert("Thank you! Form is submitted");
      window.location.reload();
    })
    .catch(error => {
      console.error('Error!', error.message)
      alert("Submission failed");
    })
})
