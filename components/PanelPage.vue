<template>
  <div>
    <h1>Root panel page</h1>
    <PanelList v-if="showList" />
    <PanelCustomization v-else />
  </div>
</template>

<script>
export default {
  extends: [PanelMixin],
  computed: {
    /* show list page if no current panel selected */
    showList() {
      return !this.currentPanelId;
    },
    showCustomizationPage() {
      return !this.showList;
    },
  },
};
</script>

<style></style>
