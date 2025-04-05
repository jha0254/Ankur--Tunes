function playSong(songName) {
    document.getElementById("player-bar").innerHTML = `
      <p>🎶 Now Playing: ${songName} 
        <button onclick="pauseSong()">⏸️ Pause</button>
      </p>`;
  }
  
  function pauseSong() {
    document.getElementById("player-bar").innerHTML = `
      <p>⏸️ Music Paused 
        <button onclick="resumeSong()">▶️ Resume</button>
      </p>`;
  }
  
  function resumeSong() {
    document.getElementById("player-bar").innerHTML = `
      <p>🎶 Now Playing: Resumed 
        <button onclick="pauseSong()">⏸️ Pause</button>
      </p>`;
  }
  