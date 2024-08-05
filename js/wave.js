document.querySelector('#export').addEventListener('click', function (e) {
    const button = e.currentTarget;
    
    const existingWave = button.querySelector('.wave');
    if (existingWave) {
      existingWave.remove();
    }
  
    const wave = document.createElement('span');
    wave.classList.add('wave');
  
    const rect = button.getBoundingClientRect();
    const waveSize = Math.max(rect.width, rect.height);
    
    wave.style.width = wave.style.height = `${waveSize}px`;
    wave.style.left = `${e.clientX - rect.left - waveSize / 2}px`;
    wave.style.top = `${e.clientY - rect.top - waveSize / 2}px`;
  
    button.appendChild(wave);
  });