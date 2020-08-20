const panelModule = {
  state: {
    /* 
      type of panel, yt, twtich, others
    */
    type: null,

    /* 
      store templates to select from
    */
    panelList: {
      next_page_url: null,
      prev_page_url: null,
      data: [],
    },

    /* set when customizing item */
    currentPanelId: null,
  },

  /* similar computed in vue */
  getters: {
    panelListThatIsRed() {
      return this.panelList.filter((p) => p.color === "red");
    },
  },

  actions: {
    /* pseduo code, real code uses commit() */
    setPanelType(type) {
      this.mutate("SET_PANEL_TYPE", type);
    },

    setPanelList(list) {
      this.mutate("SET_PANEL_LIST", list);
    },

    setCurrentPanelId(id) {
      this.mutate("SET_CURRENT_ID", id);
    },
  },

  mutations: {
    SET_PANEL_TYPE(type) {
      this.type = type;
    },
    SET_PANEL_LIST(list) {
      this.panelList = list;
    },
    SET_CURRENT_ID(id) {
      this.currentPanelId = id;
    },
  },
};

export default panelModule;
