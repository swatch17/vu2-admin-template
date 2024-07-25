import { local } from '@deann/utils';

const state = {
  collapsed: false,
  showFold: false,
  fixedSideBar: false,
};

const mutations = {
  HANDLE_SIDER_BAR: (state, data) => {
    console.log(data);
    state.collapsed = data;
    local('sidebarStatus', data);
  },
};

const actions = {
  handleSiderBar({ commit }, data) {
    commit('HANDLE_SIDER_BAR', data);
  },
};

const getters = {
  collapsed: (state) => state.collapsed,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
