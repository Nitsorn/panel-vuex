# Panel Vuex

App.vue is entry file. It loads `<PanelPage />` that is the parent component. All the state is stored inside vuex modules

- panel (contains high level panellist collection and current panel chosen to be customized).
- panel-canvas contains logic for canvas objects and customization settings.

## Vuex

We can link state/methods from vuex into our vue using mapState, mapActions. If some stuff need to be converted we can add getters inside vuex or as a vue mixin as well.

We can make vuex action do all the heavy lifting and call our helpers/utils/ hit apis and set state using `context.commit()`.

## Vue

Just UI and hit Vuex actions. Get vuex state and render.
