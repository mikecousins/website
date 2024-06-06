/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  publicPath: '/build/',
  serverBuildPath: 'build/index.js',
  serverMainFields: ['main', 'module'],
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  serverMinify: false,
  tailwind: true,
};
