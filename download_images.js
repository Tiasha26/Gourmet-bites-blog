const https = require('https');
const fs = require('fs');
const path = require('path');

const recipes = [
    { 
        name: 'mediterranean-salad',
        url: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=1200&h=800&fit=crop'
    },
    { 
        name: 'chocolate-cake',
        url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=800&fit=crop'
    },
    { 
        name: 'sushi-rolls',
        url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&h=800&fit=crop'
    },
    {
        name: 'thai-curry',
        url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1200&h=800&fit=crop'
    }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                response.resume();
                reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
            }
        });
    });
};

const main = async () => {
    for (const recipe of recipes) {
        try {
            const filepath = path.join(__dirname, 'images', `${recipe.name}.jpg`);
            await downloadImage(recipe.url, filepath);
            console.log(`Successfully downloaded image for ${recipe.name}`);
        } catch (error) {
            console.error(`Error downloading image for ${recipe.name}:`, error);
        }
    }
};

main().catch(console.error); 