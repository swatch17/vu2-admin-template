import { local } from '@deann/utils';
import {
  LAYOUT_HEADER_TABS_HEIGHT,
  LAYOUT_HEADER_HEIGHT,
} from '@/settings/layoutSetting';

const state = {
  collapsed: false,
  showFold: false,
  fixedSideBar: false,
  fullScreenHeaderHeight: 0,
};

const mutations = {
  HANDLE_SIDER_BAR: (state, data) => {
    console.log(data);
    state.collapsed = data;
    local('sidebarStatus', data);
  },
  HANDLE_SHOW_FOLD: (state, data) => {
    state.showFold = data;
    state.fullScreenHeaderHeight = data
      ? LAYOUT_HEADER_TABS_HEIGHT
      : LAYOUT_HEADER_HEIGHT;
  },
};

const actions = {
  handleSiderBar({ commit }, data) {
    commit('HANDLE_SIDER_BAR', data);
  },
  handleShowFold({ commit }, data) {
    commit('HANDLE_SHOW_FOLD', data);
  },
};

const getters = {
  collapsed: (state) => state.collapsed,
  showFold: (state) => state.showFold,
  fixedSideBar: (state) => state.fixedSideBar,
  screenHeaderHeight: (state) => state.fullScreenHeaderHeight,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
