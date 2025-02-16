<script lang="ts">
import type { HTMLButtonAttributes } from "svelte/elements";

type Props = Omit<HTMLButtonAttributes, "onmouseleave"> & {
  count?: number;
};

let { count = 0, ...rest }: Props = $props();

const increment = () => {
  count += 1;
};
</script>

<button
  type="button"
  onclick={increment}
  {...rest}
  class={[
    "border-2",
    "border-avocado-600",
    count > 0 && "rounded-md",
    "px-2 py-1",
    "cursor-pointer",
  ]}
>
  Count is {count}
</button>
