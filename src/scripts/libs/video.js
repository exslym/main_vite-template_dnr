export function videoPlayer(startButton, startedClass) {
  if (document.querySelector('video')) {
    const videoPosters = document.querySelectorAll(`.${startButton}`);
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
  }
}

//! html structure - copy templates to your document:
//* VIDEO:
/* 
  <div class="videobox">
    <video preload="auto" data-label="Video1" data-target="Video1" id="Video1">
      <source src="video/video.mp4" type="video/mp4" />
    </video>
    <div class="startVideoButton" data-target="Video1">Start Video1</div>
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
    .startVideoButton {
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
    .startedVideoClass {
      display: none;
    }
  }
*/

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
import { videoPlayer } from './libs/video';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  videoPlayer('startVideoButton', 'startedVideoClass');
});
*/
