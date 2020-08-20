import { mapActions, mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState("Panel", ["currentPanelId", "type"]),
  },
};
