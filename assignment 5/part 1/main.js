// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Initialize button state
showHideBtn.setAttribute('tabindex', '0');
showHideBtn.setAttribute('role', 'button');
showHideBtn.setAttribute('aria-pressed', 'false');
commentWrapper.style.display = 'none';

// Event listener for click and keyboard activation
showHideBtn.addEventListener('click', toggleComments);
showHideBtn.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    toggleComments();
    event.preventDefault(); // Prevent page scrolling when using the Space key
  }
});

function toggleComments() {
  let showHideText = showHideBtn.textContent;
  if (showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
    showHideBtn.setAttribute('aria-pressed', 'true'); // Update state for accessibility
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
    showHideBtn.setAttribute('aria-pressed', 'false'); // Update state for accessibility
  }
}

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
