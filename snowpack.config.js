/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js'],
        transformOptions: {
          plugins: [
            '@glimmer/babel-plugin-strict-template-precompile',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    ],
    [
      'snowpack-plugin-terser',
      {
        terserOptions: {
          compress: {
            arguments: true,
            passes: 2,
            unsafe_arrows: true,
          },
        },
      },
    ],
  ],
  devOptions: {
  },
  buildOptions: {
    minify: false
  },
  alias: {
    /* ... */
  },
  "routes": [
    {"match": "routes", "src": ".*", "dest": "/index.html"}
  ]
};
