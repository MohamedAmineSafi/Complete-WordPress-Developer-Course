document.addEventListener("DOMContentLoaded", () => {
  const block = document.querySelector("#recipe-rating");
  const postID = parseInt(block.dataset.postId);
  const avgRating = parseFloat(block.dataset.avgRating);
  const loggedIn = !!block.dataset.loggedIn; // !! will convert to bool
});
