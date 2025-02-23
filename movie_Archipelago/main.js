
let movies = JSON.parse(localStorage.getItem('movies')) || [];  // Get 'movies' from localStorage or set as an empty array
let activities = JSON.parse(localStorage.getItem('activities')) || [];  // Get 'activities' from localStorage or set as an empty array
let buttonColors = JSON.parse(localStorage.getItem('buttonColors')) || {};  // Get 'buttonColors' from localStorage or set as an empty object

//Save render page
function saveAndRender() {
    // Save the 'movies', 'activities', and 'buttonColors' to localStorage
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('activities', JSON.stringify(activities));
    localStorage.setItem('buttonColors', JSON.stringify(buttonColors));
    
    // Render the updated movies and activities on the page
    renderMovies();
    renderActivities();
}

// Add Movie Functionality
document.getElementById('newMovieForm').onsubmit = (e) => {
    e.preventDefault();  // Prevent the other lick from joining the submit event

    // Get values from form inputs
    const name = document.getElementById('movieName').value;
    const rating = parseFloat(document.getElementById('movieRating').value);
    const description = document.getElementById('movieDescription').value;
    const comment = document.getElementById('movieComment').value;
    const list = document.getElementById('movieList').value;

    // Add the new movie to the 'movies' array
    movies.push({ name, rating, description, comment, list });
    
    // Sort movies based on rating in DESC (default)
    movies.sort((a, b) => b.rating - a.rating);

    // Add each activitie to the activities section when change happens
    activities.push(`You added the movie "${name}" to the ${list}.`);

    // Save the data and re-render the page
    saveAndRender();

    // Reset the form fields
    e.target.reset();
    
    // Hide the "add movie" section
    document.getElementById('addMovieSection').style.display = "none";
};

// Render Movies Section
function renderMovies() {
    // Define the sections where movies will be displayed
    const sections = {
        favorite: document.getElementById('favMoviesList'),
        watched: document.getElementById('watchedMoviesList'),
        wishlist: document.getElementById('wishlistMoviesList'),
    };

    // Clear the content of each section
    Object.values(sections).forEach(section => section.innerHTML = '');

    // Loop through each movie and create a new movie item
       //Display the movie name and rating
        //Display the movie description
        // Display the movie comment
        // Button to edit the movie
        // Button to delete the movie
        // Conditional button to mark as watched
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie-item';  // Assign a class to the movie div
        movieDiv.innerHTML = `
            <h3>${movie.name} (${movie.rating}/5)</h3>  
            <p>${movie.description}</p>  
            <p>${movie.comment}</p>  
            <button onclick="editMovie('${movie.name}')">Edit</button>  
            <button onclick="deleteMovie('${movie.name}')">Delete</button>  
            ${movie.list !== 'watched' ? `<button onclick="markAsWatched('${movie.name}')">Mark as Watched</button>` : ''}  
        `;
    

        // Append the movie item to the appropriate section based on its list
        sections[movie.list].appendChild(movieDiv);
    });
}

// Render Activities 
function renderActivities() {
    const activitySection = document.getElementById('previousActivities');
    activitySection.innerHTML = '';  // Clear existing activities

    // Display the last 10 activities
    activities.slice(-10).forEach(activity => {
        const activityDiv = document.createElement('div');
        activityDiv.textContent = activity;  // Add activity text
        activitySection.appendChild(activityDiv);  // Append activity to the section
    });
}

// Edit Movie 
function editMovie(name) {
    const movie = movies.find(m => m.name === name);  // Find the movie by its name
    if (!movie) return;  // If movie not found, do nothing

    // Retrieve value from the input fields
    document.getElementById('movieName').value = movie.name;
    document.getElementById('movieRating').value = movie.rating;
    document.getElementById('movieDescription').value = movie.description;
    document.getElementById('movieComment').value = movie.comment;
    document.getElementById('movieList').value = movie.list;

    // Update the form submission to handle editing the movie
    document.getElementById('newMovieForm').onsubmit = (e) => {
        e.preventDefault();  // Prevent form submission

        // Update the movie with the new values from the form
        movie.name = document.getElementById('movieName').value;
        movie.rating = parseFloat(document.getElementById('movieRating').value);
        movie.description = document.getElementById('movieDescription').value;
        movie.comment = document.getElementById('movieComment').value;
        movie.list = document.getElementById('movieList').value;

        // Add an activity log entry for the edit
        activities.push(`You edited the movie "${name}".`);

        // Save the data and re-render the page
        saveAndRender();

        // Reset the form handler to the default addMovie function
        document.getElementById('newMovieForm').onsubmit = addMovie;
    };

    // Show the "add movie" section to allow editing
    document.getElementById('addMovieSection').style.display = 'block';
}

// Delete Movie 
function deleteMovie(name) {
    // Remove the movie from the 'movies' array
    movies = movies.filter(m => m.name !== name);
    
    // Add an activity log entry for the deletion
    activities.push(`You deleted the movie "${name}".`);

    // Save the data and re-render the page
    saveAndRender();
}

// Mark Movie as Watched 
function markAsWatched(name) {
    const movie = movies.find(m => m.name === name);  // Find the movie by its name
    if (!movie) return;  // If movie not found, do nothing

    // Change the movie's list to 'watched'
    movie.list = 'watched';
    
    // Add an activity log entry for marking as watched
    activities.push(`You marked the movie "${name}" as watched.`);
    
    // Save the data and re-render
    saveAndRender();
}

// Save Button Colors
document.getElementById('saveColorBtn').onclick = () => {
    // Save the selected button colors
    buttonColors = {
        favorite: document.getElementById('favColor').value,
        watched: document.getElementById('watchedColor').value,
        wishlist: document.getElementById('wishColor').value,
        newMovies: document.getElementById('newMoviesColor').value,
        activities: document.getElementById('activitiesColor').value,
    };

    // Save the button colors to localStorage
    localStorage.setItem('buttonColors', JSON.stringify(buttonColors));

    // Apply the new button colors
    applyButtonColors();
};

// Apply Button Colors
function applyButtonColors() {
     // Map button color keys to their corresponding button IDs in the HTML
    const buttonIds = {
        favorite: 'myFav',
        watched: 'watched',
        wishlist: 'wish',
        newMovies: 'newMovies',
        activities: 'activities',
        customize: 'buttonColors',
    };
    // Loop through each button and apply the saved color
    Object.entries(buttonColors).forEach(([key, color]) => {
        const buttonId = buttonIds[key];
        if (buttonId) {
            document.getElementById(buttonId).style.backgroundColor = color;
        }
    });
}

// Load colors from localStorage on page load
if (localStorage.getItem('buttonColors')) {
     // Parse the buttonColors object from localStorage
    buttonColors = JSON.parse(localStorage.getItem('buttonColors'));
    applyButtonColors(); // Apply the saved colors to the buttons
}
// Show Section Based on Button Click
document.getElementById('myFav').onclick = () => showSection('favMoviesSection');
document.getElementById('watched').onclick = () => showSection('watchedMoviesSection');
document.getElementById('wish').onclick = () => showSection('wishlistSection');
document.getElementById('newMovies').onclick = () => showSection('addMovieSection');
document.getElementById('activities').onclick = () => showSection('activitiesSection');
document.getElementById('buttonColors').onclick = () => showSection('customizeSection');


// Only Show a Selected Section on the page each time
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.movie-section, .customize-section').forEach(section => section.style.display = 'none');
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Initialize the page
applyButtonColors();  // Apply saved button colors
renderMovies();  // Render the movies
renderActivities();  // Render the activities


