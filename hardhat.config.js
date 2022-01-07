require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

const rinkebyUrl = process.env.ALCHEMY_RINKEBY_URL
	? process.env.ALCHEMY_RINKEBY_URL
	: ''

const accountKey = process.env.ACCOUNT_KEY ? process.env.ACCOUNT_KEY : ''

module.exports = {
	solidity: '0.8.3',
	networks: {
		rinkeby: {
			url: rinkebyUrl,
			accounts: [accountKey],
		},
	},
}
