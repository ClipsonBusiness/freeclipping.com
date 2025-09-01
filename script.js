// Blackout Marketing Workshop Funnel JavaScript



document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initScrollAnimations();
    initWorkshopReminders();
    initSocialProof();
    initScrollTracking();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Scroll animations for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, .result-item, .step-card, .bonus-item').forEach(el => {
        observer.observe(el);
    });
}





// Show message
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        ${type === 'error' ? 'background: #e74c3c;' : 'background: #27ae60;'}
    `;
    
    document.body.appendChild(messageDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// Workshop reminders and countdown
function initWorkshopReminders() {
    // Set workshop date (August 27th, 2025 at 5pm UTC)
    const workshopDate = new Date('2025-08-27T17:00:00Z');
    
    function updateWorkshopCountdown() {
        const now = new Date();
        const distance = workshopDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            // Update countdown display if it exists
            const countdownEl = document.querySelector('.workshop-countdown');
            if (countdownEl) {
                countdownEl.innerHTML = `
                    <div class="countdown-item">${days}</div>
                    <div class="countdown-item">${hours.toString().padStart(2, '0')}</div>
                    <div class="countdown-item">${minutes.toString().padStart(2, '0')}</div>
                `;
            }
        } else {
            // Workshop has started
            const countdownEl = document.querySelector('.workshop-countdown');
            if (countdownEl) {
                countdownEl.innerHTML = '<div class="countdown-item">LIVE NOW!</div>';
            }
        }
    }
    
    // Update countdown every minute
    setInterval(updateWorkshopCountdown, 60000);
    updateWorkshopCountdown();
}

// Social proof counter animation
function initSocialProof() {
    // Since this is a workshop funnel, we can add social proof for workshop attendees
    const attendeeCount = document.querySelector('.attendee-count');
    if (attendeeCount) {
        const targetNumber = 100;
        const duration = 2000; // 2 seconds
        const increment = targetNumber / (duration / 16); // 60fps
        let currentNumber = 0;
        
        function animateCounter() {
            currentNumber += increment;
            if (currentNumber < targetNumber) {
                attendeeCount.textContent = Math.floor(currentNumber);
                requestAnimationFrame(animateCounter);
            } else {
                attendeeCount.textContent = targetNumber;
            }
        }
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(attendeeCount);
    }
}



// Scroll tracking for analytics
function initScrollTracking() {
    let scrollDepth = 0;
    const scrollThresholds = [25, 50, 75, 90];
    
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        
        scrollThresholds.forEach(threshold => {
            if (scrollPercent >= threshold && scrollDepth < threshold) {
                scrollDepth = threshold;
                trackScrollDepth(threshold);
            }
        });
    });
}

// Track scroll depth
function trackScrollDepth(depth) {
    console.log(`User scrolled ${depth}% down the workshop page`);
    // Add your analytics tracking code here
    // Example: gtag('event', 'scroll_depth', { 'value': depth });
}

// Track workshop registration
function trackWorkshopRegistration(name, email, phone) {
    console.log(`Workshop registration tracked: ${name} (${email}) - ${phone}`);
    // Add your conversion tracking code here
    // Example: gtag('event', 'workshop_registration', { 'event_category': 'workshop' });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .popup-content {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        position: relative;
    }
    
    .popup-close {
        position: absolute;
        top: 10px;
        right: 15px;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #666;
    }
    
    .popup-form {
        margin: 1.5rem 0;
    }
    
    .popup-form input {
        width: 100%;
        padding: 15px;
        border: 2px solid #ddd;
        border-radius: 8px;
        margin-bottom: 1rem;
        font-size: 1rem;
    }
    
    .popup-form button {
        width: 100%;
        padding: 15px;
        background: linear-gradient(45deg, #ff6b6b, #ff8e53);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
    }
    
    .popup-note {
        font-size: 0.9rem;
        color: #666;
        margin: 0;
    }
    
    .workshop-countdown {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 2rem 0;
    }
    
    .countdown-item {
        background: rgba(255,255,255,0.2);
        padding: 1rem;
        border-radius: 10px;
        font-size: 2rem;
        font-weight: 700;
        min-width: 60px;
        text-align: center;
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy load images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading
initLazyLoading();

// Add scroll progress bar
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ff6b6b, #ff8e53);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress bar
initScrollProgress();
