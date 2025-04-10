const viewRecipeButtons = document.querySelectorAll(".view-recipe");
const readMoreButtons = document.querySelectorAll(".read-more");

viewRecipeButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Viewing full recipe details...");
    });
});

readMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Reading full blog post...");
    });
});

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white');
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('bg-white');
        navbar.classList.remove('shadow-sm');
    }
});

// Form validation and submission
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-section form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the subscription to a server
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Recipe card hover effect
document.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    // Add loading class initially
    img.classList.add('loading');
    
    // Check if image is already loaded
    if (img.complete) {
        img.classList.remove('loading');
    } else {
        img.addEventListener('load', function() {
            this.classList.remove('loading');
        });
        
        // Handle image loading errors
        img.addEventListener('error', function() {
            console.error('Failed to load image:', this.src);
            this.classList.remove('loading');
        });
    }
});

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Recipe and Blog Post Data
const recipes = {
    'carbonara': {
        title: 'Spaghetti Carbonara',
        ingredients: [
            '400g spaghetti',
            '200g pancetta or guanciale',
            '4 large eggs',
            '100g Pecorino Romano',
            '100g Parmigiano Reggiano',
            'Black pepper',
            'Salt'
        ],
        instructions: [
            'Bring a large pot of salted water to boil and cook pasta according to package instructions.',
            'While pasta cooks, fry pancetta until crispy.',
            'In a bowl, whisk eggs and grated cheese.',
            'Combine hot pasta with egg mixture and pancetta.',
            'Season with black pepper and serve immediately.'
        ],
        image: 'images/carbonara.jpg'
    },
    'avocado-toast': {
        title: 'Avocado Toast',
        ingredients: [
            '2 slices sourdough bread',
            '1 ripe avocado',
            '2 eggs',
            'Red pepper flakes',
            'Sea salt',
            'Black pepper',
            'Lemon juice'
        ],
        instructions: [
            'Toast the bread until golden brown.',
            'Mash avocado with lemon juice, salt, and pepper.',
            'Spread avocado mixture on toast.',
            'Top with poached eggs and red pepper flakes.',
            'Season with additional salt and pepper if needed.'
        ],
        image: 'images/avocado-toast.jpg'
    },
    'thai-curry': {
        title: 'Thai Green Curry',
        ingredients: [
            '400ml coconut milk',
            '2 tbsp green curry paste',
            '300g mixed vegetables',
            '200g tofu or chicken',
            'Thai basil leaves',
            'Fish sauce',
            'Brown sugar'
        ],
        instructions: [
            'Fry curry paste in oil until fragrant.',
            'Add coconut milk and bring to simmer.',
            'Add vegetables and protein.',
            'Season with fish sauce and sugar.',
            'Garnish with Thai basil.'
        ],
        image: 'images/thai-curry.jpg'
    }
};

const blogPosts = {
    'pasta-guide': {
        title: 'The Art of Perfecting Pasta',
        content: `
            <h2>The Art of Perfecting Pasta</h2>
            <p>Making perfect pasta at home is an art that requires attention to detail and understanding of basic principles. Here's a comprehensive guide to help you master this essential skill.</p>
            
            <h3>Choosing the Right Flour</h3>
            <p>The foundation of great pasta starts with the right flour. Traditional Italian pasta uses "00" flour, which is finely milled and has a lower protein content than all-purpose flour. This creates a more tender, silky texture.</p>
            
            <h3>Water Temperature and Salt</h3>
            <p>Always use generously salted water (about 1 tablespoon per liter) and bring it to a rolling boil before adding pasta. The water should be at least 4-5 times the volume of the pasta.</p>
            
            <h3>Perfect Al Dente</h3>
            <p>The key to perfect pasta is achieving the elusive "al dente" texture. This means the pasta should be firm to the bite but not hard in the center. Start checking 1-2 minutes before the package instructions suggest.</p>
            
            <h3>Reserving Pasta Water</h3>
            <p>Always reserve a cup of pasta water before draining. The starchy water helps create silky sauces and helps ingredients bind together.</p>
        `,
        date: 'March 15, 2024'
    },
    'superfoods': {
        title: 'Top 5 Superfoods for a Healthy Diet',
        content: `
            <h2>Top 5 Superfoods for a Healthy Diet</h2>
            <p>Incorporating superfoods into your diet can provide a powerful nutritional boost. Here are five must-have superfoods and how to use them.</p>
            
            <h3>1. Kale</h3>
            <p>Packed with vitamins A, C, and K, kale is a versatile leafy green that can be used in salads, smoothies, or cooked dishes.</p>
            
            <h3>2. Quinoa</h3>
            <p>A complete protein source, quinoa is rich in fiber and essential amino acids. Use it as a base for bowls or as a side dish.</p>
            
            <h3>3. Blueberries</h3>
            <p>High in antioxidants and vitamin C, blueberries are perfect for breakfast, desserts, or as a healthy snack.</p>
            
            <h3>4. Salmon</h3>
            <p>Rich in omega-3 fatty acids, salmon is excellent for heart health and brain function.</p>
            
            <h3>5. Avocado</h3>
            <p>Packed with healthy fats and fiber, avocados are versatile and can be used in both savory and sweet dishes.</p>
        `,
        date: 'March 10, 2024'
    }
};

// Create and append modals to the body
function createModals() {
    // Recipe Modal
    const recipeModal = document.createElement('div');
    recipeModal.className = 'modal fade';
    recipeModal.id = 'recipeModal';
    recipeModal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="" alt="" class="img-fluid mb-3">
                            <h6>Ingredients:</h6>
                            <ul class="ingredients-list"></ul>
                        </div>
                        <div class="col-md-6">
                            <h6>Instructions:</h6>
                            <ol class="instructions-list"></ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Blog Post Modal
    const blogModal = document.createElement('div');
    blogModal.className = 'modal fade';
    blogModal.id = 'blogModal';
    blogModal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="blog-content"></div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(recipeModal);
    document.body.appendChild(blogModal);
}

// Initialize modals
createModals();
const recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));
const blogModal = new bootstrap.Modal(document.getElementById('blogModal'));

// Recipe button functionality
document.querySelectorAll('.view-recipe').forEach(button => {
    button.addEventListener('click', () => {
        const recipeId = button.dataset.recipeId;
        const recipe = recipes[recipeId];
        
        const modal = document.getElementById('recipeModal');
        modal.querySelector('.modal-title').textContent = recipe.title;
        modal.querySelector('img').src = recipe.image;
        modal.querySelector('img').alt = recipe.title;
        
        const ingredientsList = modal.querySelector('.ingredients-list');
        ingredientsList.innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        
        const instructionsList = modal.querySelector('.instructions-list');
        instructionsList.innerHTML = recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('');
        
        recipeModal.show();
    });
});

// Blog post button functionality
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const postId = button.dataset.postId;
        const post = blogPosts[postId];
        
        const modal = document.getElementById('blogModal');
        modal.querySelector('.modal-title').textContent = post.title;
        modal.querySelector('.blog-content').innerHTML = post.content;
        
        blogModal.show();
    });
});
