<script lang="ts">
    import { onMount } from 'svelte';
    import heroVideoPath from '$lib/assets/hero.mp4';
    import type { PageData } from "./$types";
    import type { Content } from "../lib/microcms.ts";
    export let data: PageData ;

    let catchphrases = [
        "未来を創る、AIの力を引き出す",
        "AI技術で地域を変革、新しい未来を作る",
        "イノベーションの火花を、私たちと一緒に散らそう"
    ];
    let index = 0;
    let opacity = 1;
    
    let sortedContents: Content[] = [];
  
    onMount(() => {
      sortedContents = [...data.contents].sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      ).slice(0, 4);

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
  
  <!-- Hero Section -->
  <div class="hero">
    <video src={heroVideoPath} autoplay muted loop></video>
    <div class="overlay"></div>
    <div class="text text-white text-4xl" style="opacity: {opacity};">
        {catchphrases[index]}
    </div>
</div>
  
<body class="mx-auto">

    <div class="bg-slate-300 p-4">
        <h1 class="text-5xl p-4">お知らせ</h1>
            <div class=" notifications flex overflow-x-auto ">
                {#each sortedContents as content, i (i)}
                <div class="notification  shadow-lg rounded-lg m-2 bg-white">
                    <div class="content">
                        {#if content.eyecatch} 
                        <img src={content.eyecatch.url} alt={content.title} class="w-full h-32 object-cover rounded-t-lg" />
                        {/if}
                        <div class="p-4">
                            <p class="text-sm text-gray-500">{content.category.name}</p>
                            <p class="text-lg font-semibold mb-2">{content.title}</p>
                            <p class="text-xs text-gray-400">{content.publishedAt}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

</body>
  
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
@media (max-width: 800px) {
    .hero {
        display: none;
    }}

    .notification {
      @apply flex-shrink-0 w-96 p-2 bg-white shadow-lg rounded-lg m-2;
    }

    .notification img {
      @apply rounded-t-lg;
    }

    .notification .content {
      @apply p-4;
    }

    .notification .content p {
      @apply mb-2;
    }
</style>