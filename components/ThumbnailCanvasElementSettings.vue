<template>
  <div>
    <!-- conditional loading based on element.type -->
    <EmojiSettings v-if="element.type === 'emoji'" />
    <!-- ... and so on -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  props: {
    element: Object,
  },
};
</script>

<style></style>
