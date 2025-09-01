// Blackout Marketing Workshop Funnel Configuration
// Customize these values to match your workshop and brand

const CONFIG = {
    // Brand Information
    brand: {
        name: "Viral Clipping Academy",
        tagline: "Video Editing & Clipping Training",
        website: "https://www.viralclippingacademy.com",
        email: "training@viralclippingacademy.com",
        phone: "+1-555-123-4567"
    },

    // Training Details
    workshop: {
        title: "Video Editing & Clipping Training",
        subtitle: "Make $1000, $2000, Even $5000 in Your Sleep on Autopilot Following the Free Training",
        topic: "Master Video Editing & Clipping - Create Viral Content That Grows Your Audience",
        date: "August 27th, 2025",
        time: "5:00 PM UTC (1:00 PM EST)",
        duration: "90 minutes",
        seats: 100,
        cost: "FREE",
        guarantee: "100% FREE • No Credit Card Required • Limited Seats Available"
    },

    // Founder Story
    founder: {
        name: "Sergio",
        background: "Born in Spain, moved to Iceland at 7, country of just 350,000 people",
        story: "Grew up chasing football dream but dropped out of high school and quit football when I discovered business",
        before: {
            agency: "$100K/month",
            clients: "45 clients",
            situation: "Managing 45 clients, burning out, barely profiting, working 16-hour days just to stay afloat"
        },
        after: {
            income: "$50K/month+",
            clients: "Just a few premium clients",
            lifestyle: "Working with just a few premium clients, keeping 85%+ profit, letting AI handle most delivery"
        },
        results: "Helped new and experienced agency owners scale to $10K–$20K/month and beyond"
    },

    // Workshop Content
    content: {
        mainPromise: "Sign your first 2–3 High-Ticket Clients in the next 65 days Guaranteed",
        description: "In this free live workshop, I'll show you how I went from being a high school dropout to making $50K/month+ with just a handful of clients, using the AI Partner Model.",
        learningPoints: [
            "How I went from 45 low-paying clients to $50K/month with just a few premium ones",
            "Why traditional agencies are dead—and how to escape the burnout trap",
            "How to land high-ticket clients ($5K–$50K/month) with a simple, scalable system",
            "The exact tools and processes to let AI handle 90% of the work for you",
            "How to start from zero—no niche, no experience, no problem"
        ]
    },

    // Results & Benefits
    results: [
        {
            icon: "💰",
            title: "High-Ticket Clients",
            description: "Land $5K–$50K/month clients instead of low-paying ones"
        },
        {
            icon: "🤖",
            title: "AI Does 90% of Work",
            description: "Let artificial intelligence handle delivery while you focus on growth"
        },
        {
            icon: "📈",
            title: "85%+ Profit Margins",
            description: "Keep more of what you earn with fewer overhead costs"
        },
        {
            icon: "⏰",
            title: "Work Less, Earn More",
            description: "Scale to $50K/month+ without the 16-hour workdays"
        }
    ],

    // Workshop Bonuses
    bonuses: [
        {
            icon: "📋",
            title: "AI Partner Model Checklist",
            description: "Step-by-step checklist to implement the AI Partner Model in your agency immediately after the workshop"
        },
        {
            icon: "🤖",
            title: "AI Tools Directory",
            description: "Curated list of the exact AI tools and platforms I use to handle 90% of client delivery work"
        },
        {
            icon: "💰",
            title: "High-Ticket Pricing Guide",
            description: "Complete pricing strategy guide to confidently charge $5K-$50K/month for your services"
        },
        {
            icon: "📱",
            title: "Client Acquisition Templates",
            description: "Ready-to-use email sequences and social media templates to attract high-ticket clients"
        }
    ],

    // Urgency & Scarcity
    urgency: {
        seatsAvailable: 100,
        seatsPerClass: "ONLY 100 SEATS AVAILABLE PER CLASS",
        workshopDate: "August 27th, 2025",
        countdownEnabled: true
    },

    // Colors (CSS Variables)
    colors: {
        primary: "#1a1a1a",
        secondary: "#2d2d2d",
        accent: "#ff6b6b",
        accent2: "#ff8e53",
        success: "#27ae60",
        warning: "#e74c3c",
        gold: "#ffd700",
        blue: "#667eea",
        purple: "#764ba2"
    },

    // Form Configuration
    form: {
        fields: [
            { type: "text", name: "name", placeholder: "Full Name", required: true },
            { type: "email", name: "email", placeholder: "Email", required: true },
            { type: "tel", name: "phone", placeholder: "Phone", required: true }
        ],
        submitText: "YES I WANT TO ATTEND!",
        note: "100% FREE • No Credit Card Required • Limited Seats Available"
    },

    // Analytics & Tracking
    analytics: {
        googleAnalytics: "GA_MEASUREMENT_ID",
        facebookPixel: "FB_PIXEL_ID",
        conversionTracking: true,
        scrollTracking: true,
        exitIntent: true,
        workshopRegistration: true
    },

    // Exit Intent Popup
    exitIntent: {
        enabled: true,
        title: "Wait! Don't Miss the AI Partner Model Workshop",
        message: "Learn how to sign your first 2-3 high-ticket clients in 65 days guaranteed. Only 100 seats available per class!",
        cta: "YES I WANT TO ATTEND!",
        note: "100% FREE • August 27th @5pm UTC"
    },

    // Thank You Page
    thankYou: {
        title: "You're Confirmed for the Workshop!",
        subtitle: "Congratulations! You've secured your spot in the AI Partner Model live workshop",
        nextSteps: [
            "Check Your Email",
            "Add to Calendar",
            "Prepare Questions",
            "Join the Workshop"
        ],
        workshopDetails: {
            date: "August 27th, 2025",
            time: "5:00 PM UTC (1:00 PM EST)",
            duration: "90 minutes",
            topic: "The AI Partner Model - How to Sign Your First 2-3 High-Ticket Clients in 65 Days"
        }
    },

    // Legal & Compliance
    legal: {
        privacyPolicy: "#privacy",
        termsOfService: "#terms",
        disclaimer: "#disclaimer",
        facebookDisclaimer: "This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.",
        resultsDisclaimer: "Results vary. Success requires effort and dedication.",
        ftcCompliance: true
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}

// Helper functions for easy customization
const Customizer = {
    // Update workshop details
    updateWorkshopDetails: function(type, value) {
        if (type === 'date') {
            CONFIG.workshop.date = value;
            document.querySelectorAll('.workshop-date').forEach(el => {
                el.textContent = value;
            });
        } else if (type === 'time') {
            CONFIG.workshop.time = value;
            document.querySelectorAll('.workshop-time').forEach(el => {
                el.textContent = value;
            });
        } else if (type === 'seats') {
            CONFIG.workshop.seats = value;
            document.querySelectorAll('.seats-available').forEach(el => {
                el.textContent = `ONLY ${value} SEATS AVAILABLE PER CLASS`;
            });
        }
    },

    // Update founder story
    updateFounderStory: function(part, value) {
        if (part === 'name') {
            CONFIG.founder.name = value;
            document.querySelectorAll('.founder-name').forEach(el => {
                el.textContent = value;
            });
        } else if (part === 'income') {
            CONFIG.founder.after.income = value;
            document.querySelectorAll('.founder-income').forEach(el => {
                el.textContent = value;
            });
        }
    },

    // Update colors
    updateColors: function(colorType, newColor) {
        CONFIG.colors[colorType] = newColor;
        document.documentElement.style.setProperty(`--color-${colorType}`, newColor);
    },

    // Get configuration value
    get: function(path) {
        return path.split('.').reduce((obj, key) => obj && obj[key], CONFIG);
    },

    // Set configuration value
    set: function(path, value) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        const target = keys.reduce((obj, key) => obj[key] = obj[key] || {}, CONFIG);
        target[lastKey] = value;
    }
};

// Make Customizer available globally
window.Customizer = Customizer;

// Auto-apply configuration on page load
document.addEventListener('DOMContentLoaded', function() {
    // Apply workshop details
    Customizer.updateWorkshopDetails('date', CONFIG.workshop.date);
    Customizer.updateWorkshopDetails('time', CONFIG.workshop.time);
    Customizer.updateWorkshopDetails('seats', CONFIG.workshop.seats);
    
    // Apply colors
    Object.entries(CONFIG.colors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--color-${key}`, value);
    });
    
    console.log('Blackout Marketing Workshop Funnel Configuration Loaded');
    console.log('Use Customizer.updateWorkshopDetails(), Customizer.updateFounderStory(), etc. to customize');
});
