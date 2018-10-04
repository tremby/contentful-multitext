const fs = require('fs');
const version = require('./package.json').version;

const config = {
	id: 'multitext',
	name: 'Multitext',
	src: `https://unpkg.com/contentful-multitext@${version}`,
	fieldTypes: ['Symbols'],
};

fs.writeFileSync('./extension.json', JSON.stringify(config, null, '\t') + '\n');
