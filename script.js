// Get the container where the user data will be displayed
const userContainer = document.getElementById('user-container');
// Get the reload button
const reloadButton = document.getElementById('reload-btn');
// The API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/users';

/**
 * 2. Use JS fetch to request data from the API
 * 3. Parse the JSON response.
 * 4. Loop through users and display their name, email, and address.
 * 5. Handle errors with catch block.
 */
async function fetchAndDisplayUsers() {
    // Clear previous content and show a loading message
    userContainer.innerHTML = '<p>Fetching data...</p>';

    try {
        // 2. Request data from the API
        const response = await fetch(API_URL);

        // Check if the response status is OK (200-299)
        if (!response.ok) {
            // Throw an error if the response is not successful (e.g., 404, 500)
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 3. Parse the JSON response
        const users = await response.json();

        // Clear the loading message
        userContainer.innerHTML = '';

        // 4. Loop through users and display their info
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            // Format address details for display
            const address = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

            userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;
            
            userContainer.appendChild(userCard);
        });

    } catch (error) {
        // 5. Handle errors with catch block (for network errors, JSON parsing errors, etc.)
        console.error('There was a problem with the fetch operation:', error);
        // 7. Test network error handling by disabling internet. 
        // This message will be displayed when internet is disabled.
        userContainer.innerHTML = `
            <div class="error-message">
                <h2>❌ Error Loading Data</h2>
                <p>Could not load user data. Please check your internet connection or the API endpoint.</p>
                <p>Details: ${error.message}</p>
            </div>
        `;
    }
}

// 8. Add a reload button to refetch data.
reloadButton.addEventListener('click', fetchAndDisplayUsers);

// Load data when the page first loads
document.addEventListener('DOMContentLoaded', fetchAndDisplayUsers);