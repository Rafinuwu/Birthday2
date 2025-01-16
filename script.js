document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById("video-container");
  const imageContainer = document.getElementById("image-container");

  // Simulate video ending for YouTube (set timeout as workaround)
  setTimeout(() => {
    videoContainer.style.display = "none"; // Hide video
    imageContainer.style.display = "flex"; // Show letter image with animation
  }, 10000); // Adjust time (milliseconds) based on video duration
});
