window.addEventListener('load', function() {
    var loaderBar = document.getElementById('loader-bar');
    var loaderText = document.getElementById('loader-text');
    var progress = 0;
  
    var interval = setInterval(function() {
      progress += 1;
      loaderBar.style.width = progress + '%';
      loaderText.innerText = progress + '%';
  
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(function() {
          loaderBar.parentElement.style.display = 'none';
        }, 500); // Desaparece después de 0.5 segundos (ajustable)
      }
    }, 10);
  });