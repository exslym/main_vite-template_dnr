export function videoTimeCodes(startButton, timeCodeButton, startedClass) {
  if (document.querySelector('video')) {
    const videoPosters = document.querySelectorAll(`.${startButton}`);
    const timeCodeButtons = document.querySelectorAll(`.${timeCodeButton}`);
    const videos = document.querySelectorAll('video');

    let videoPlay = (videoId) => {
      for (let poster of videoPosters) {
        if (poster.dataset.target === videoId) {
          poster.classList.add(`${startedClass}`);
        }
      }
      for (let video of videos) {
        if (video.dataset.target === videoId) {
          video.play();
          video.setAttribute('controls', 'true');
        }
      }
    };

    let videoStop = (videoId) => {
      for (let video of videos) {
        if (video.dataset.target === videoId) {
          video.pause();
        }
      }
    };

    for (let poster of videoPosters) {
      poster.addEventListener('click', (e) => {
        e.preventDefault();
        let videoId = poster.dataset.target;
        videoPlay(videoId);
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

    for (let btn of timeCodeButtons) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        let timeCode = btn.dataset.time;
        for (let video of videos) {
          let id = video.dataset.target;
          let videoId = id;
          if (id == videoId) {
            video.currentTime = timeCode;
            videoPlay(videoId);
          }
        }
      });
    }
  }
}

//! html structure - copy templates to your document:
//* VIDEO:
/* 
  <button
    class="timeCodeButton"
    data-target="video1"
    data-time="30"
  >
    Go to timecode 30sec
  </button>
  ---
  ---
  <div class="videobox">
    <video preload="auto" data-label="Video" data-target="video1" id="video1">
      <source src="video/video.mp4" type="video/mp4" />
    </video>
    <div class="startButton" data-target="video1"></div>
  </div>
*/

//! styles structure - copy _modals.scss module to your project and import it in the index.scss
/* 
  .videobox {
    position: relative;
    width: 100%;
    aspect-ratio: 1.78;
    @include adapt(border-radius, 20, 40);
    video {
      cursor: pointer;
      margin: 0;
      padding: 0;
      display: block;
      @include adapt(border-radius, 20, 40);
      width: 100%;
      height: 100%;
    }
    .startButton {
      cursor: pointer;
      margin: 0;
      padding: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: no-repeat center / cover url('../assets/images/poster.png');
      @include adapt(border-radius, 20, 40);
    }
    .startedClass {
      display: none;
    }
  }
*/

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
import { videoTimeCodes } from './libs/videoTimeCodes';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  videoTimeCodes('startButton', 'timeCodeButton', 'startedClass');
});
*/
