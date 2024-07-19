const state = { count: 0 };
const mutations = {
  increment(state) {
    state.count++;
  },
};

const actions = {};

const getters = {
  count: (state) => state.count,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
