<script lang="ts">
import svelteLogo from "@/assets/svelte.svg";
import Counter from "@/lib/Counter.svelte";
</script>

<main class="flex flex-col items-center justify-center gap-4 p-8">
  <div class="flex items-center justify-center">
    <a href="https://wxt.dev" target="_blank" rel="noreferrer">
      <img src="/wxt.svg" class="w-8 h-8" alt="WXT Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="w-8 h-8" alt="Svelte Logo" />
    </a>
  </div>
  <h1>WXT + Svelte</h1>
  <Counter count={10} onmouseenter={() => console.log("mouse entered")} />
</main>
