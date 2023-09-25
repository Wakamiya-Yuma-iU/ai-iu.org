<script>
    import { onMount } from 'svelte';
    import heroVideoPath from '$lib/assets/hero.mp4';
  
    let catchphrases = ['AI関連技術に関する、活用方法・技術分野を模索','学内・周辺地域でのAI関連技術の利活用を促進する', '既存モデルの活用法・新たなモデルの作成・AI倫理', '自然言語処理や機械学種についてサークルで独自に研究し、地域や学内での活用を目指す'];
    let index = 0;
    let opacity = 1;
  
    onMount(() => {
      const interval = setInterval(() => {
        opacity = 0;
        setTimeout(() => {
          index = (index + 1) % catchphrases.length;
          opacity = 1;
        }, 1000);
      }, 4000);
  
      return () => clearInterval(interval);
    });
  </script>
  
  <style>
    .hero {
        position: relative;
        height: 50vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center; 
    }
    video {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -1;
      transform: translate(-50%, -50%);
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(8, 32, 50, 0.7);
      z-index: 1;
    }
    .text {
      position: relative;
      z-index: 2;
      transition: opacity 1s;
      text-align: center;
    }
  </style>
  
  <div class="hero">
    <video src={heroVideoPath} autoplay muted loop></video>
    <div class="overlay"></div>
    <div class="text text-white text-4xl" style="opacity: {opacity};">
      {catchphrases[index]}
    </div>
  </div>
  