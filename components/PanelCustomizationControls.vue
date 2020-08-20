<template>
  <div>
    <h1>customize controls</h1>

    <!-- different controls based on panel type -->
    <div v-if="type === 'youtube'">
      <!-- bg controls (move to own component) -->
      <accordion>
        <BoolInput v-model="editingBg" />
        <ImageInput v-model="bg" />
      </accordion>

      <!-- effect (move to own component) -->
      <accordion>
        <!-- similar here -->
      </accordion>

      <!-- elements (move to own component) -->
      <accordion>
        <div
          @reorder="reorderElements"
          v-for="element in canvas.elements"
          :key="element.id"
        >
          <span>{{ element }}</span>
          <button @click="deleteElement(element)">delete</button>

          <ThumbnailCanvasElementSettings :element="element" />
        </div>
      </accordion>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  extends: [PanelMixin],
  methods: {
    ...mapActions("PanelCanvas", [
      "setBg",
      "setIsEditingBg",
      "setEffect",
      "reorderElements",
    ]),
    goBackToList() {
      // go to vuex
      this.setCurrentPanelId(null);
    },
    editElement(element) {},
  },

  mounted() {
    this.setAvailableEffects(this.currentPanelId);
  },

  computed: {
    ...mapState("PanelCanvas", [
      "availableEffects",
      "isEditingBg",
      "canvasData",
    ]),
    editingBg: {
      get() {
        return this.isEditingBg;
      },
      set(val) {
        this.setIsEditingBg(val);
      },
    },
    bg: {
      get() {
        return this.canvasData.backgroundUrl;
      },
      set(val) {
        this.setBg(val);
      },
    },
    // same for effect
  },
};
</script>

<style></style>
