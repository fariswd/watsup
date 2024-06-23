const packageJson = require('../package.json');

const versionController = (_, res) =>
  res.json({
    status: 200,
    message: 'OK',
    result: {
      version: packageJson.version,
    },
  });

module.exports = {
  versionController,
};
