const w = window;
const d = document.documentElement;
const b = document.body;
const x = w.innerWidth || d.clientWidth || b.clientWidth;
const y = w.innerHeight || d.clientHeight || b.clientHeight;
const aspectRatio = x / y;
// const isMobileDevice =
// 	/Android|webOS|Macintosh|Mac|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
// 		navigator.userAgent
// 	);
const isMobileDevice =
  /Android|webOS|Macintosh|Mac|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  ) && navigator.maxTouchPoints > 1;

class Resolutions {
  constructor() {
    if (!isMobileDevice && x > 1280 && x <= 1440 && aspectRatio > 1) {
      // screen width: 1280 - 1440
      this.resolution = 'desktopMiddle';
    } else if (!isMobileDevice && x > 1024 && x <= 1280 && aspectRatio > 1) {
      // screen width: 1024 - 1280
      this.resolution = 'desktopSmall';
    } else if (isMobileDevice && x > 1180 && x <= 1368 && aspectRatio > 1) {
      // 1368 * 1024
      this.resolution = 'bigTabletLand';
    } else if (isMobileDevice && x > 932 && x <= 1180 && aspectRatio > 1) {
      // 1180 * 820
      this.resolution = 'middleTabletLand';
    } else if (isMobileDevice && x > 896 && x <= 932 && aspectRatio > 1) {
      // 932 * 430
      this.resolution = 'bigPhoneLand';
    } else if (isMobileDevice && x > 740 && x <= 896 && aspectRatio > 1) {
      // 896 * 414
      this.resolution = 'middlePhoneLand';
    } else if (isMobileDevice && x <= 740 && aspectRatio > 1) {
      // 740 * 375
      this.resolution = 'smallPhoneLand';
    } else if (isMobileDevice && x > 820 && x <= 1024 && aspectRatio <= 1) {
      // 1024 * 1368
      this.resolution = 'bigTabletVert';
    } else if (isMobileDevice && x > 768 && x <= 820 && aspectRatio <= 1) {
      // 820 * 1180
      this.resolution = 'middleTabletVert';
    } else if (isMobileDevice && x > 430 && x <= 768 && aspectRatio <= 1) {
      // 768 * 1024
      this.resolution = 'smallTabletVert';
    } else if (isMobileDevice && x > 414 && x <= 430 && aspectRatio <= 1) {
      // 430 * 932
      this.resolution = 'bigPhoneVert';
    } else if (isMobileDevice && x > 375 && x <= 414 && aspectRatio <= 1) {
      // 414 * 896
      this.resolution = 'middlePhoneVert';
    } else if (isMobileDevice && x <= 375 && aspectRatio <= 1) {
      // 375 * 896 || 360 *
      this.resolution = 'smallPhoneVert';
    } else {
      // desktop
      this.resolution = 'desktop';
    }

    console.log(this.resolution);
  }
}

export const resolutionCheck = new Resolutions();

//! Add function to your code:
/* 
	if (resolutionCheck.resolution === 'desktop') {
		// code
	} else if (resolutionCheck.resolution === 'desktopMiddle') {
		// code
	}
*/
