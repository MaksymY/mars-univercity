<template>
  <button class="button">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    lol: {
      type: String,
      default: "hello",
      required: true,
    },
  },
});
</script>

<style lang="scss">
.button {
  border-radius: 8px;
  color: $red;
}
</style>
