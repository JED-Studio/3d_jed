/*const videoContainer = document.getElementById('block_video');
const video = document.getElementById('myVideo');

// Add event listener for mouseenter event on the video container
videoContainer.addEventListener('mouseenter', function() {
  // Play the video when the mouse enters the video container
  video.play();
});

// Add event listener for mouseleave event on the video container
videoContainer.addEventListener('mouseleave', function() {
  // Pause the video when the mouse leaves the video container
  video.pause();

  // Reset the video to the beginning
  video.currentTime = 0;
  
});
document.body.addEventListener('click', function() {
  // Play the video when the user clicks anywhere on the document
  video.play();
});
*/


const videoBlocks = document.querySelectorAll('[id^=block_video]');

for (const videoBlock of videoBlocks) {
  const videos = videoBlock.querySelectorAll('video');

  for (const video of videos) {
    video.pause();
  }

  
  videoBlock.addEventListener('mouseenter', function() {
  
    for (const video of videos) {
      video.play();
    }
  });

  
  videoBlock.addEventListener('mouseleave', function() {
    
    for (const video of videos) {
      video.pause();

  
      video. currentTime = 0;
    }
  });
}
