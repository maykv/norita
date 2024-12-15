document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    audio.src = 'lettertomyself.m4a';
  
    const lyrics = document.querySelectorAll('.lyrics p');
  
    function syncLyrics() {
      const currentTime = audio.currentTime * 1000; // Convert to milliseconds
  
      lyrics.forEach(lyric => {
        const lyricTime = parseInt(lyric.getAttribute('data-time'), 10);
  
        if (currentTime >= lyricTime - 50 && currentTime < lyricTime + 50) {
          // 가사 타이밍 동기화
          lyric.style.opacity = '1';
        } else {
          lyric.style.opacity = '0';
        }
      });
    }
  
    audio.addEventListener('canplaythrough', function () {
      audio.play();
    });
  
    audio.addEventListener('timeupdate', syncLyrics);
  });
  