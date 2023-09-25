<script>
    import { onMount } from 'svelte';
    import heroVideoPath from '$lib/assets/hero.mp4';
  
    let catchphrases = [
        "未来を創る、AIの力を引き出す",
        "AI技術で地域を変革、新しい未来を作る",
        "イノベーションの火花を、私たちと一緒に散らそう"
    ];
    let index = 0;
    let opacity = 1;
  
    onMount(() => {
      const interval = setInterval(() => {
        opacity = 0;
        setTimeout(() => {
          index = (index + 1) % catchphrases.length;
          opacity = 1;
        }, 700);
      }, 3000);
  
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
  