document.addEventListener('DOMContentLoaded', function() {
    // Async function to fetch user data from the API
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
        const dataContainer = document.getElementById('api-data'); // Data container where API data will be displayed

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            const users = await response.json(); // Parse the response to JSON

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element
            const userList = document.createElement('ul');

            // Loop through users and create a list item for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the text to user's name
                userList.appendChild(listItem); // Append <li> to <ul>
            });

            // Append the userList to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle error and display an error message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Call the function to fetch data when the DOM content is fully loaded
    fetchUserData();
});
