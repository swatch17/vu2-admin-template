import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import getters from './getters';

Vue.use(Vuex);

class StoreModule {
  getModuleFiles() {
    const moduleFiles = [];
    const files = import.meta.globEager('./modules/*.js');
    Object.keys(files).reduce((pre, cur) => moduleFiles.push(cur));
    return moduleFiles;
  }
  getModulesName() {
    const modules = {};
    const files = import.meta.globEager('./modules/*.js');
    for (const key in files) {
      const res = files[key];
      modules[key.replace(/(\.\/modules\/|\.js)/g, '')] = res.default;
    }
    return modules;
  }
}

const storeModule = new StoreModule();

const store = new Store({
  namespaced: true,
  modules: storeModule.getModulesName(),
});
if (import.meta.hot) {
  import.meta.hot.accept(storeModule.getModuleFiles(), () => {
    module.hot.accept(storeModule.getModuleFiles(), () => {
      store.hotUpdate({
        modules: storeModule.getModules(),
      });
    });
  });
}

export default store;
