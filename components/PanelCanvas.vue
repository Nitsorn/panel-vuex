<template>
  <canvas></canvas>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  methods: {
    ...mapActions("PanelCanvas", [
      "loadCanvasDefault",
      "selectElementId",
      "setElementData",
    ]),
    bindObjectEventListeners() {
      /*
        listen to object mousedown and drag resize or whatever
      */
      addEventListener("mousedown", (e) => {
        /* calculate bound and then see if element is selected */
        this.selectElementId(e.target.attr.id);
      });

      addEventListener("mousemove", (e) => {
        if (!this.selectedElementId) return;
        // set position from event();
        this.setElementData({
          x,
          y,
        });
      });

      addEventListener("mouseup", (e) => {
        this.selectElementId(null);
      });
    },
  },

  computed: {
    ...mapState("PanelCanvas", ["canvasData", "selectedElementId"]),
  },

  watch: {
    canvasData() {
      /* redraw stuff */
    },
  },

  mounted() {
    this.loadCanvasDefault();
    this.bindObjectEventListeners();
  },
};
</script>

<style></style>
