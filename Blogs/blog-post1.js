function submitComment() {
    // Get values from the input fields
    const commentText = document.getElementById('commentText').value;
    const name = document.getElementById('name').value || 'Anonymous';
    
    // Get the current date and time
    const now = new Date();
    const dateString = now.toLocaleString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    // Check if comment is not empty
    if (commentText.trim() === '') {
        alert("Please enter a comment.");
        return;
    }

    // Create a comment object
    const comment = {
        name: name,
        date: dateString,
        text: commentText
    };

    // Get existing comments from localStorage or initialize an empty array
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    // Add the new comment to the comments array
    comments.push(comment);
    
    // Save the updated comments array back to localStorage
    localStorage.setItem('comments', JSON.stringify(comments));

    // Display the comment on the page
    displayComment(comment);

    // Clear the input fields
    document.getElementById('commentText').value = '';
    document.getElementById('name').value = '';
}

// Function to display a single comment
function displayComment(comment) {
    // Create comment box element
    const commentBox = document.createElement('div');
    commentBox.classList.add('comment-box');

    // Set the inner HTML of the comment box
    commentBox.innerHTML = `
        <div class="user-icon"></div>
        <div class="comment-content">
            <span class="name">${comment.name}</span>
            <span class="date"> - ${comment.date}</span>
            <div class="text">${comment.text}</div>
        </div>
    `;

    // Append the new comment to the comments section
    document.getElementById('comments').appendChild(commentBox);
}

// Function to load comments from localStorage on page load
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(displayComment);
}

// Call loadComments when the page loads
window.onload = loadComments;
