<template>
  <div>
    <button @click="goBackToList">back</button>
    <PanelCustomizationControls />
    <PanelCanvas />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  props: {
    thumbnail: Object,
  },
  extends: [PanelMixin],
  methods: {
    ...mapActions("Panel", ["setCurrentPanelId"]),
    goBackToList() {
      // go to vuex
      this.setCurrentPanelId(null);
    },
  },
};
</script>

<style></style>
