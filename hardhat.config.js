require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

const rinkebyUrl = process.env.ALCHEMY_RINKEBY_URL
	? process.env.ALCHEMY_RINKEBY_URL
	: ''

module.exports = {
	solidity: '0.8.3',
	networks: {
		rinkeby: {
			url: rinkebyUrl,
			accounts:
				process.env.ACCOUNT_KEY !== undefined ? [process.env.ACCOUNT_KEY] : [],
		},
	},
}
