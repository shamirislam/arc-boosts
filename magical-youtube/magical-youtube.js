document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("search-icon-legacy");
    const lumosSound = new Audio('https://res.cloudinary.com/dbcawo2ty/video/upload/v1687609379/lumos_wz2gh7.mp3');
    const lumosMaximaSound = new Audio('https://res.cloudinary.com/dbcawo2ty/video/upload/v1687609379/lumos-maxima_j63i4y.mp3');
    let clickCount = 0;
  
    if(searchIcon) {
      searchIcon.addEventListener("click", () => {
        lumosSound.play();
        clickCount++;
        if (clickCount % 4 === 0) {
          lumosMaximaSound.play();
        }
      });
    }
  
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
    const playSoundBasedOnMode = () => {
      lumosSound.play();
    }
  
    darkModeMediaQuery.addListener(playSoundBasedOnMode);
  
    const elements = [
      ...document.querySelectorAll('.html5-video-player'),
      ...document.querySelectorAll('.style-scope ytd-rich-item-renderer'),
      document.getElementById('video-preview-container'),
    ];
  
    elements.forEach((element) => {
      if(element) {
        element.addEventListener("click", () => {
          lumosSound.play();
        });
      }
    });
  });  