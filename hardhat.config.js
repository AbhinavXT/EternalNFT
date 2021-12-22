require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
	solidity: '0.8.3',
	networks: {
		rinkeby: {
			url: process.env.ALCHEMY_RINKEBY_URL,
			accounts: [process.env.ACCOUNT_KEY],
		},
	},
}
