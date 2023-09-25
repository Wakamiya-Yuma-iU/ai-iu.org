<script lang="ts">
    let isOpen = false;
    let openedSubmenu: string | null = null;
  
    const menuItems = [
      {
        name: 'プロジェクト',
        href: '/projects',
        submenu: [
          { name: '機械学習', href: '/projects/ml' },
          { name: '自然言語処理', href: '/projects/nlp' },
          { name: '強化学習', href: '/projects/rl' },
          { name: '技術の活用・イベント', href: '/projects/event' },
        ],
      },
      { name: '研究開発', href: '/research' },
      { name: 'お知らせ', href: '/news' },
      { name: '団体概要', href: '/about' },
      { name: 'コンタクト', href: '/contact' },
    ];
  
    function toggleMenu() {
      isOpen = !isOpen;
      openedSubmenu = null;
    }
  
    function toggleSubmenu(name:string) {
      if (openedSubmenu === name) openedSubmenu = null;
      else openedSubmenu = name;
    }
  </script>
  
  <style>
    .subnav {
      display: none;
      position: absolute;
      width: 200%;
      left: 0;
    }
    .nav-item:hover .subnav, .subnav:hover {
      display: block;
    }
  </style>
  
  <header class="bg-gray-800 text-white">
    <div class="mr-4 mx-auto p-4 flex justify-between items-center">
      <div class="text-lg font-semibold">
        <a href="/">

        </a>
      </div>
      <div class="lg:hidden">
        <button on:click={toggleMenu} class="text-white hover:text-gray-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
        </button>
      </div>
      <nav class="hidden lg:flex flex-grow items-center justify-end space-x-10">
        {#each menuItems as { name, href, submenu } (name)}
          {#if submenu}
            <div class="relative nav-item">
              <a href={href} class="text-white hover:text-gray-300">{name}</a>
              <div class="subnav bg-gray-800 text-white py-2 px-4">
                {#each submenu as { name, href }}
                  <a href={href} class="block mt-4 hover:text-gray-300">{name}</a>
                {/each}
              </div>
            </div>
          {:else}
            <a href={href} class="text-white hover:text-gray-300">{name}</a>
          {/if}
        {/each}
      </nav>
    </div>
    {#if isOpen}
    <nav class="lg:hidden block text-center">
      {#each menuItems as { name, href, submenu } (name)}
        {#if submenu}
          <div class="block py-0 text-white hover:text-gray-300">
            <button
              on:click={() => toggleSubmenu(name)}
              on:keydown={() => toggleSubmenu(name)}
              class=" py-2 text-white hover:text-gray-300"
            >
              {name}
            </button>
            {#if openedSubmenu === name}
              <div class=" pl-4">
                {#each submenu as { name, href }}
                  <a href={href} class="block py-2 text-white hover:text-gray-300">{name}</a>
                {/each}
              </div>
            {/if}
          </div>
        {:else}
          <a href={href} class="block py-2 text-white hover:text-gray-300">
            {name}
          </a>
        {/if}
      {/each}
    </nav>
    {/if}
  </header>
  