<script lang="ts">
  let count: number = $state(0);

  const increment = () => {
    count += 1;
  };
</script>

<button
  type="button"
  onclick={increment}
  class="border border-avocado-600 rounded-md px-2 py-1 cursor-pointer"
>
  Count is {count}
</button>
