const rewireInlineSource = require('react-app-rewire-inline-source');

module.exports = (config, env) => {
	config = rewireInlineSource(config, env);
	return config;
};
