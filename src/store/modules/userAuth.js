export const state = {
  username: "",
  password: "",
  isLoggedIn: false,
};
export const mutations = {
  SET_USER_DETAILS(state, payload) {
    state.username = payload.username;
    state.password = payload.password;
    state.isLoggedIn = true;
  },
};
export const actions = {
  setUser({ commit }, payload) {
    console.log(payload);
    commit("SET_USER_DETAILS", payload);
  },
};
export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  getUsername: (state) => state.username,
};
export default {
  state,
  mutations,
  actions,
  getters,
};
