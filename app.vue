<template>
  <div>
    <h1>Dashboard or whatever root page</h1>
    <PanelPage :type="type" />
  </div>
</template>

<script>
export default {
  computed: {
    type() {
      switch (this.$route.name) {
        case "yt":
          return "yt-panesl";
        case "twitch":
        default:
          return "twitch-panels";
      }
    },
  },
};
</script>

<style></style>
