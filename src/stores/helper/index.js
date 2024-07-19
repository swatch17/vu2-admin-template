const getModules = async () => {
  const modules = {};
  const files = import.meta.glob('../modules/*.js');

  for (const key in files) {
    const res = await files[key]();

    modules[key.replace(/(\..\/modules\/|\.js)/g, '')] = res.default;
    console.log(modules);
  }
  return modules;
};

export default getModules;
