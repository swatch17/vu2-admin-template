/**
 * 查找树形结构中的路径
 *
 * @param tree 树形结构数组
 * @param path 要查找的路径
 * @returns 匹配到的路径数组，若未找到则返回空数组
 */
const findPath = (tree, path) => {
  let paths = [];
  /**
   * 匹配菜单项
   *
   * @param menuItem 菜单项数组
   * @param path 待匹配的路径
   * @param items 已有的菜单项数组，默认为空数组
   * @returns 无返回值，匹配到的菜单项会被存储在传入的items数组中
   */
  const matchMenus = (menuItem, path, items = []) => {
    let currentItems = [];
    menuItem.forEach((item) => {
      const { children, path } = item;
      paths = [...items, item];
      if (item.path === path) {
        paths = currentItems;
      } else if (children && children.length > 0) {
        matchMenus(children, path, currentItems);
      }
    });
  };
  matchMenus(tree, path);
  return paths;
};

/**
 * 获取所有父级路径
 *
 * @param tree 树形结构数据
 * @param path 目标路径
 * @returns 返回包含所有父级路径的数组
 */
const getAllParentPath = (tree, path) => {
  const menuItem = findPath(tree, path);
  return menuItem.map((item) => item.path);
};

/**
 * 从菜单列表中获取与给定父路径匹配的菜单项
 *
 * @param menus 菜单列表
 * @param parent 父路径
 * @returns 返回与父路径匹配的菜单项数组
 */
const getMatch = (menus, parent) => {
  const matched = [];
  menus.forEach((item) => {
    if (parent.includes(item.path)) {
      matched.push({ ...item, name: item.meta?.title || item.name });
    }
    if (item.children && item.children.length > 0) {
      const children = getMatch(item.children, parent);
      matched.push(...children);
    }
  });
  return matched;
};

export { findPath, getAllParentPath, getMatch };
