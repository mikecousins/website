/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  publicPath: '/build/',
  serverBuildPath: 'build/index.js',
  serverMainFields: ['main', 'module'],
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  serverMinify: false,
  tailwind: true,
  future: {
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
