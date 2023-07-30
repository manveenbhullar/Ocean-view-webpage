const API_KEY = '563492ad6f917000010000019b983f3b62fe43daa92e746d4553dd35'; 

const oceanImage = document.getElementById('ocean-image');
const newImageButton = document.getElementById('newImageButton');
const emailForm = document.getElementById('emailForm');

// Function to fetch a random ocean image from Pexels API
async function fetchRandomOceanImage() {
    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=ocean`, {
            headers: {
                Authorization: API_KEY,
            },
        });
        const data = await response.json();
        const randomImageIndex = Math.floor(Math.random() * data.photos.length);
        const imageUrl = data.photos[randomImageIndex].src.large;
        oceanImage.src = imageUrl;
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

// Event listeners
newImageButton.addEventListener('click', fetchRandomOceanImage);

emailForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.querySelector('.email-input');
    const email = emailInput.value.trim();
    if (email !== '') {
        // Add your logic here to send the email
        console.log(`Sending image to ${email}`);
        emailInput.value = '';
    }
});

// Fetch a random ocean image when the page loads
fetchRandomOceanImage();

