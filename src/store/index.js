import Vuex from "vuex";
import Vue from "vue";
import state from "./state";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

var store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});

export default store;
