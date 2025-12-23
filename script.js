// Enhanced script.js with additional features
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const contactSection = document.getElementById('contactSection');

    if (menuToggle && contactSection) {
        menuToggle.addEventListener('click', function() {
            contactSection.classList.toggle('active');
            menuToggle.innerHTML = contactSection.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        document.addEventListener('click', function(event) {
            if (!contactSection.contains(event.target) && !menuToggle.contains(event.target)) {
                contactSection.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Enhanced binary code animation
    const binaryElement = document.getElementById('binaryCode');
    const originalBinary = binaryElement.textContent;

    function glitchBinary() {
        let glitched = "";
        const glitchChars = ["0", "1", "█", "░", "▓"];
        
        for(let i = 0; i < originalBinary.length; i++) {
            if(Math.random() > 0.96) {
                glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                glitched += originalBinary[i];
            }
        }
        binaryElement.textContent = glitched;
        setTimeout(glitchBinary, 80 + Math.random() * 300);
    }

    setTimeout(glitchBinary, 1000);

    // Enhanced matrix lines with dynamic metrics
    const matrixContainer = document.querySelector('.data-viz');
    const matrixLines = [
        "> ACTIVE PROJECTS: 3 DEPLOYED",
        "> LINES OF CODE: 50K+",
        "> SYSTEM UPTIME: 99.8%",
        "> API REQUESTS: 10K+/DAY",
        "> USERS SERVED: 1,200+",
        "> CODE COVERAGE: 85%",
        "> ML ACCURACY: 92%",
        "> RESPONSE TIME: <200ms",
        "> DATA PROCESSED: 5TB+",
        "> BUG RESOLUTION: 98%",
        "> PROJECTS: 100% ON-TIME",
        "> CLIENT SATISFACTION: 4.8/5"
    ];

    // Create more matrix lines
    for(let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'matrix-line';
        line.textContent = matrixLines[Math.floor(Math.random() * matrixLines.length)];
        line.style.animationDelay = `${i * 2.5}s`;
        line.style.animationDuration = `${20 + Math.random() * 10}s`;
        matrixContainer.appendChild(line);
    }

    // Profile image pulse animation
    const profileImage = document.querySelector('.profile-image');
    setInterval(() => {
        profileImage.style.boxShadow = '0 0 30px rgba(0, 243, 255, 0.9)';
        setTimeout(() => {
            profileImage.style.boxShadow = 'var(--cyber-glow)';
        }, 800);
    }, 4000);

    // Intersection Observer for card animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add sequential animation for list items in project details
                if (entry.target.querySelector('.project-details')) {
                    const listItems = entry.target.querySelectorAll('.project-details li');
                    listItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Initialize all cards with animation
    document.querySelectorAll('.cyber-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(25px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Initialize project list items
        const listItems = card.querySelectorAll('.project-details li');
        listItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-10px)';
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        });
        
        observer.observe(card);
    });

    // Click animation for interactive elements
    document.querySelectorAll('.contact-item, .contact-detail, .skill-tag, .framework-item, .achievement-item').forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Skill tag level indicators
    document.querySelectorAll('.skill-tag').forEach(tag => {
        if (tag.textContent.includes('Advanced') || tag.textContent.includes('Expert')) {
            tag.innerHTML += ' <span class="skill-level">★</span>';
        } else if (tag.textContent.includes('Intermediate')) {
            tag.innerHTML += ' <span class="skill-level">▲</span>';
        }
    });

    // Dynamic year update
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Add typing effect to binary code (optional)
    let binaryTyped = '';
    let binaryIndex = 0;
    
    function typeBinary() {
        if (binaryIndex < originalBinary.length) {
            binaryTyped += originalBinary[binaryIndex];
            binaryElement.textContent = binaryTyped;
            binaryIndex++;
            setTimeout(typeBinary, 30);
        }
    }
    
    // Uncomment to enable typing effect on load
    // setTimeout(typeBinary, 2000);
});