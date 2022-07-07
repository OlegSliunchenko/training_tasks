// eslint-disable-next-line import/no-import-module-exports
import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@components/*': path.resolve(__dirname, 'src/components/*'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@utils/*': path.resolve(__dirname, 'src/utils/*'),
    }
  }
};
