<template>
  <div class="Authentification">
    <p>Mars Univercity</p>
    <Button>coucou hugues</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../components/atoms/Button.vue";

export default defineComponent({
  name: "Authentification",
  components: {
    Button,
  },
});
</script>
