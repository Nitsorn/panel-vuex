const panelModule = {
  state: {
    canvasData: {
      dimensions: {
        width: 123,
        height: 123,
      },
      effect: null,
      backgroundUrl: null,
      effect: null,
      elements: [],
    },

    selectedElementId: null,
    isEditingBg: false,

    availableEffects: [],
  },

  actions: {
    loadCanvasDefault(template) {
      const data = PanelHelper.createInitialThumbnailData(template);
      /* pseudocode */
      this.mutateLoadCanvas(data);
    },

    reorderElements(elementId) {
      // mutate canvasData.elements.sortBy()
    },

    selectElementId(id) {
      this.mutateSelectedElementId(id);
    },

    /* element position etc. */
    setElementData(elementUUID, data) {
      this.mutateElementData(elementUUID, data);
    },

    setBg(url) {
      // mutate backgroundUrl in canvas
    },
    setIsEditingBg() {
      // toggle mutate isEditingBg
    },
    setEffect(effect) {
      // mutate effect
    },

    setAvailableEffects(panelId) {
      mutateAvailabelEffects(this.get("api/get-effect/{panelId}"));
    },
  },

  mutations: {
    /* pseudocode */
    mutateLoadCanvas(data) {
      // add whatver elements and default effects
      this.canvasData = data;
    },

    mutateSelectedElementId(id) {
      this.selectedElementId = id;
    },

    mutateElementData(data) {
      const element = cloneDeep(
        this.canvasData.elements.find((element) => element.uuid === data.UUID)
      );
      /* 
        this probably doesnt work, when mutating object in arry look at
        https://stackoverflow.com/questions/50422357/updating-object-in-array-with-vuex
        more info in vue/vuex doc too
      */
      element = {
        ...element,
        ...data,
      };
    },
  },
};

export default panelModule;
