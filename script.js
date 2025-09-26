/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  const combinedComment = `${username}: ${comment}`;

  if (addToStart) {
    comments.unshift(combinedComment);
  } else {
    comments.push(combinedComment);
  }
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage() {
  const winnerDisplay = document.getElementById("winnerDisplay");
  winnerDisplay.innerHTML = message; // Clear previous winner message
}
/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  const winningEntry = comments[randomIndex];
  const message = `winner: <strong class = "text-success">${winningEntry}</strong>`;
  showWinnerMessage(message);
  showRandomEmoji();
  highlightWinner(winningEntry);
  // Add code to display a random celebratory emoji
  const emojis = [
    "🎉", // party popper
    "🏆", // trophy
    "🥳", // partying face
    "🎊", // confetti ball
    "👏", // clapping hands
    "💐", // bouquet
    "🍾", // champagne bottle
    "🌟", // glowing star
    "🎈", // balloon
    "🥂", // clinking glasses
  ];
  // Pick a random emoji from the array
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  // Update the #winner-emoji element with the emoji (check if element exists)
  const emojiDiv = document.getElementById("winner-emoji");
  if (emojiDiv) {
    emojiDiv.textContent = randomEmoji;
  }
}
/* Task 4 - Complete the function according to the TODO */
// This function displays a random emoji in the #winner-emoji element
function showRandomEmoji() {
  const emojis = ["🎉", "🥳", "🎊", "🏆", "✨", "😎", "🔥", "💯", "👏", "🎁"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const emojiDiv = document.getElementById("winner-emoji");
  emojiDiv.textContent = randomEmoji;
}

/* Task 5 - Complete the function according to the TODO */
// This function reverses the order of all comments in the array
function reverseOrder() {
  comments.reverse();
  // Optionally, update the UI if needed (e.g., re-render the comment list)
}

/* Task 6 - Complete the function according to the TODO */
// This function removes a comment at the given index from the comments array
function removeComment(index) {
  if (index >= 0 && index < comments.length) {
    comments.splice(index, 1);
    // Optionally, update the UI if needed (e.g., re-render the comment list)
  }
}

/* Task 7 - Complete the function according to the TODO */
// This function filters comments to only show those with emojis and updates the displayed list
function filterEmojiComments() {
  // Regex to match any emoji character
  const emojiRegex =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  // Filter comments array for those containing emojis
  const emojiComments = comments.filter((comment) => emojiRegex.test(comment));
  // Update the displayed list (assumes a function renderComments exists)
  if (typeof renderComments === "function") {
    renderComments(emojiComments);
  }
}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */

// Add event listener for Pick a Winner button
document.addEventListener("DOMContentLoaded", function () {
  const pickWinnerBtn = document.getElementById("pick-winner-btn");
  if (pickWinnerBtn) {
    pickWinnerBtn.addEventListener("click", pickWinner);
  }
});
