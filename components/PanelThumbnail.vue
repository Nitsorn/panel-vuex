<template>
  <div @click="onClick">
    <img :src="thumbnail.img" alt="" />
    <h3>{{ thumbnail.title }}</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  props: {
    thumbnail: Object,
  },
  methods: {
    ...mapActions("Panel", ["setCurrentPanelId"]),
    onClick() {
      // go to vuex
      this.setCurrentPanelId(this.thumbnail.id);
    },
  },
};
</script>

<style></style>
