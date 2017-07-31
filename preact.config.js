export default (config, env, helpers) => {
  let [{ rule }] = helpers.getLoadersByName(config, 'babel-loader');
  let babelConfig = rule.options;

  const index = config.module.loaders.findIndex(
    l => l.loader === 'json-loader'
  );
  config.module.loaders.splice(index, 1);

  babelConfig.plugins.push('preval');
};
