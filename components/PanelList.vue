<template>
  <div>
    <h1>List of things</h1>
    <PanelThumbnail
      v-for="(item, index) in list"
      :thumbnail="item"
      :key="index"
    />
    <Pagination :props="here" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  extends: [PanelMixin],
  computed: {
    ...mapState("Panel", ["panelList"]), // getting list from vuex
    items() {
      return this.panelList.data;
    },

    /* other props for pagination */
  },
};
</script>

<style></style>
