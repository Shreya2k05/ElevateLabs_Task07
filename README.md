📝 Project Description

This project is the implementation of Task 7: Fetch and Display Data from a Public API for the Web Development Internship.

It is a client-side application built using HTML, CSS, and plain JavaScript, focusing on mastering asynchronous data retrieval and dynamic content generation based on the data received.

✨ Features Implemented

Asynchronous Fetching: Utilizes the modern JavaScript async/await syntax with the native Fetch API to request data from an external REST endpoint.


Dynamic Rendering: Successfully parses the JSON response and dynamically generates structured HTML cards for each user using DOM manipulation.


Robust Error Handling: Implements try...catch logic to gracefully handle both network failures (Hint: testing by disabling the internet) and non-200 HTTP response statuses, providing clear, user-friendly feedback.


Reload Functionality: Includes a button that triggers a re-fetch of the data, demonstrating the ability to handle user interaction for refreshing content.


Clean Styling: Styled with CSS to present the fetched user information in a clear, accessible, and card-based layout.


💻 Technologies Used

HTML5

CSS3

JavaScript (ES6+): Focusing on fetch(), async/await, and DOM Manipulation.

🔗 API Endpoint

The data is fetched from the following public JSON Placeholder API endpoint:

https://jsonplaceholder.typicode.com/users

🚀 How to Run Locally

Clone the Repository:


Bash


git clone https://github.com/Shreya2k05/ElevateLabs_Task07

cd "C:\Users\Shreya Gupta\OneDrive\Desktop\fetch_display-data"

Open the HTML File:


Locate the index.html file and open it directly in your preferred web browser.


💡 Key Takeaways (Learning Outcome)

This task successfully reinforced the understanding of the following core web development concepts:


Asynchronous JavaScript: Managing non-blocking operations using promises and async/await.


API Interaction: The complete process of requesting data from a remote server.


JSON Parsing: Converting raw network response data into usable JavaScript objects.

Error Handling: Building resilient applications that handle expected and unexpected failures.
