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
  methods: {
    ...mapActions("PanelCanvas", ["setElementData"]),
    setElementSettings(key, value) {
      // we can use setElementData here
    },
  },
};
</script>

<style></style>
