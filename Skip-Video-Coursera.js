function skipAndNext() {
  setTimeout(() => {
    const videos = document.querySelectorAll('video');

    if (videos.length > 0) {
      const video = videos[0];

      video.play().then(() => {
        const skipTo = video.duration * 0.92;
        video.currentTime = skipTo;
      }).catch(error => {
        console.error('Không thể phát video:', error);
      });

      video.addEventListener('pause', () => {
        video.play();
      });

      setTimeout(() => {
        const nextButton = document.querySelector('button[aria-label="Next Item"]');
        if (nextButton) {
          nextButton.click();
          setTimeout(skipAndNext, 1000);
        }
      }, 3000);
    } else {
      console.log('Không tìm thấy video trên trang.');
    }
  }, 4000);
}

skipAndNext();
