export function videoPlayer(startButton, startedClass) {
  if (document.querySelector('video')) {
    const videoPosters = document.querySelectorAll(`.${startButton}`);
    const videos = document.querySelectorAll('video');

    let Play = (videoId) => {
      for (let poster of videoPosters) {
        if (poster.dataset.label === videoId) {
          poster.classList.add(`${startedClass}`);
        }
      }
      for (let video of videos) {
        if (video.dataset.label === videoId) {
          video.play();
        }
      }
    };

    let Stop = (videoId) => {
      for (let video of videos) {
        if (video.dataset.label === videoId) {
          video.pause();
        }
      }
    };

    for (let poster of videoPosters) {
      poster.addEventListener('click', (e) => {
        e.preventDefault();
        let videoId = poster.dataset.label;
        Play(videoId);
      });
    }

    for (let video of videos) {
      video.addEventListener('click', (e) => {
        e.preventDefault();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    }
  }
}
