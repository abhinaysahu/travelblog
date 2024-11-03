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

    // Create comment box element
    const commentBox = document.createElement('div');
    commentBox.classList.add('comment-box');

    // Set the inner HTML of the comment box
    commentBox.innerHTML = `
        <div class="user-icon"></div>
        <div class="comment-content">
            <span class="name">${name}</span>
            <span class="date"> - ${dateString}</span>
            <div class="text">${commentText}</div>
        </div>
    `;

    // Append the new comment to the comments section
    document.getElementById('comments').appendChild(commentBox);

    // Clear the input fields
    document.getElementById('commentText').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}
