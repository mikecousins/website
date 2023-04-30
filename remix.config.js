/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  publicPath: '/build/',
  serverBuildPath: 'api/index.js',
  serverMainFields: ['main', 'module'],
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  serverMinify: false,
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
