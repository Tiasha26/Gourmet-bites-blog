// Recipe data
const recipes = {
    'carbonara': {
        title: 'Spaghetti Carbonara',
        image: './images/carbonara.jpg',
        category: 'Italian',
        time: '30 minutes',
        servings: '4',
        description: 'A classic Italian pasta dish with creamy sauce and crispy pancetta. This authentic recipe uses eggs and Pecorino Romano cheese for the perfect creamy texture.',
        ingredients: [
            '400g spaghetti',
            '200g pancetta or guanciale',
            '4 large eggs',
            '100g Pecorino Romano cheese',
            '100g Parmigiano Reggiano',
            'Black pepper',
            'Salt'
        ],
        instructions: [
            'Bring a large pot of salted water to boil and cook pasta according to package instructions.',
            'While pasta cooks, cut pancetta into small cubes and fry until crispy.',
            'In a bowl, whisk eggs and grated cheese together.',
            'Drain pasta, reserving some pasta water.',
            'Combine hot pasta with egg mixture and pancetta, adding pasta water if needed.',
            'Season with black pepper and serve immediately.'
        ],
        notes: 'The key to a perfect carbonara is to work quickly and use hot pasta to cook the eggs without scrambling them.'
    },
    'avocado-toast': {
        title: 'Avocado Toast',
        image: './images/avocado-toast.jpg',
        category: 'Breakfast',
        time: '10 minutes',
        servings: '2',
        description: 'A healthy and trendy breakfast favorite with endless variations. This version includes poached eggs and chili flakes for extra flavor.',
        ingredients: [
            '2 slices sourdough bread',
            '1 ripe avocado',
            '2 eggs',
            'Red chili flakes',
            'Sea salt',
            'Black pepper',
            'Lemon juice'
        ],
        instructions: [
            'Toast the bread until golden brown.',
            'Mash avocado with lemon juice, salt, and pepper.',
            'Poach the eggs in simmering water for 3-4 minutes.',
            'Spread avocado mixture on toast.',
            'Top with poached eggs and chili flakes.'
        ],
        notes: 'For best results, use perfectly ripe avocados. You can add various toppings like cherry tomatoes, microgreens, or smoked salmon.'
    },
    'thai-curry': {
        title: 'Thai Green Curry',
        image: './images/thai-curry.jpg',
        category: 'Thai',
        time: '40 minutes',
        servings: '4',
        description: 'A fragrant and spicy Thai curry packed with fresh vegetables. This authentic recipe uses homemade green curry paste for maximum flavor.',
        ingredients: [
            '400ml coconut milk',
            '2-3 tbsp green curry paste',
            '300g mixed vegetables',
            '300g firm tofu',
            'Thai basil leaves',
            'Fish sauce',
            'Palm sugar',
            'Kaffir lime leaves'
        ],
        instructions: [
            'Fry curry paste in oil until fragrant.',
            'Add coconut milk and bring to simmer.',
            'Add vegetables and tofu.',
            'Season with fish sauce and palm sugar.',
            'Add Thai basil and kaffir lime leaves.',
            'Simmer until vegetables are tender.'
        ],
        notes: 'Adjust the amount of curry paste according to your spice preference. Serve with jasmine rice.'
    },
    'mediterranean-salad': {
        title: 'Mediterranean Salad',
        image: './images/mediterranean-salad.jpg',
        category: 'Mediterranean',
        time: '20 minutes',
        servings: '4',
        description: 'Fresh and healthy Mediterranean salad with feta and olives. A perfect light meal or side dish.',
        ingredients: [
            '2 cups cherry tomatoes',
            '1 cucumber',
            '1 red onion',
            '1 cup Kalamata olives',
            '200g feta cheese',
            'Extra virgin olive oil',
            'Fresh herbs (oregano, basil)',
            'Salt and pepper'
        ],
        instructions: [
            'Halve cherry tomatoes and slice cucumber.',
            'Thinly slice red onion and soak in water.',
            'Combine all vegetables in a bowl.',
            'Add crumbled feta and olives.',
            'Dress with olive oil and herbs.',
            'Season with salt and pepper.'
        ],
        notes: 'For best flavor, let the salad sit for 30 minutes before serving.'
    },
    'chocolate-cake': {
        title: 'Classic Chocolate Cake',
        image: './images/chocolate-cake.jpg',
        category: 'Dessert',
        time: '1 hour',
        servings: '12',
        description: 'Rich and moist chocolate cake with ganache frosting. A crowd-pleasing classic that\'s perfect for any occasion.',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups sugar',
            '3/4 cup cocoa powder',
            '2 eggs',
            '1 cup milk',
            '1/2 cup vegetable oil',
            '2 tsp vanilla extract',
            '1 cup hot coffee',
            'For ganache: 200g dark chocolate, 200ml heavy cream'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C).',
            'Mix dry ingredients in a bowl.',
            'Add wet ingredients and mix well.',
            'Pour in hot coffee and stir until combined.',
            'Bake for 30-35 minutes.',
            'For ganache: Heat cream and pour over chocolate, stir until smooth.'
        ],
        notes: 'The hot coffee enhances the chocolate flavor. Let the cake cool completely before frosting.'
    },
    'sushi-rolls': {
        title: 'California Sushi Rolls',
        image: './images/sushi-rolls.jpg',
        category: 'Japanese',
        time: '45 minutes',
        servings: '4',
        description: 'Fresh and easy-to-make California sushi rolls. Perfect for beginners learning to make sushi at home.',
        ingredients: [
            '2 cups sushi rice',
            'Nori sheets',
            'Crab meat or imitation crab',
            'Avocado',
            'Cucumber',
            'Mayonnaise',
            'Soy sauce',
            'Wasabi'
        ],
        instructions: [
            'Cook sushi rice according to package instructions.',
            'Place nori on bamboo mat.',
            'Spread rice on nori, leaving top edge bare.',
            'Add fillings in the center.',
            'Roll tightly using the bamboo mat.',
            'Cut into 8 pieces with a sharp knife.'
        ],
        notes: 'Keep your hands wet when handling the rice to prevent sticking. Use a very sharp knife for clean cuts.'
    }
};

// Get recipe ID from URL
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');

// Function to display recipe
function displayRecipe(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) {
        window.location.href = 'index.html';
        return;
    }

    // Update page title
    document.title = `${recipe.title} - Gourmet Bites`;

    // Update recipe content
    document.getElementById('recipe-title').textContent = recipe.title;
    const recipeImage = document.getElementById('recipe-image');
    
    // Add error handling for image loading
    recipeImage.onerror = function() {
        console.error('Error loading image:', recipe.image);
        this.src = './images/hero-bg.jpg'; // Fallback image
    };
    
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;
    
    // Log the image path for debugging
    console.log('Loading image:', recipe.image);
    
    document.getElementById('recipe-category').textContent = recipe.category;
    document.getElementById('recipe-time').textContent = recipe.time;
    document.getElementById('recipe-servings').textContent = recipe.servings;
    document.getElementById('recipe-description').textContent = recipe.description;

    // Update ingredients
    const ingredientsList = document.getElementById('recipe-ingredients');
    ingredientsList.innerHTML = recipe.ingredients.map(ingredient => 
        `<li><i class="fas fa-check text-primary me-2"></i>${ingredient}</li>`
    ).join('');

    // Update instructions
    const instructionsList = document.getElementById('recipe-instructions');
    instructionsList.innerHTML = recipe.instructions.map(instruction => 
        `<li>${instruction}</li>`
    ).join('');

    // Update notes
    document.getElementById('recipe-notes').innerHTML = `<p>${recipe.notes}</p>`;
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, recipeId:', recipeId);
    if (recipeId) {
        displayRecipe(recipeId);
    } else {
        window.location.href = 'index.html';
    }
}); 