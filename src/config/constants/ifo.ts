import tokens from './tokens'
import { Ifo, Token } from './types'
import farms from './farms'

const lydAvaxFarm = farms.find((x) => x.pid === 4)
const avaxUsdtFarm = farms.find((x) => x.pid === 17)

const lydAvaxLPToken: Token = {
  symbol: lydAvaxFarm.lpSymbol,
  address: lydAvaxFarm.lpAddresses,
  decimals: 18,
}

const avaxUsdtLPToken: Token = {
  symbol: avaxUsdtFarm.lpSymbol,
  address: avaxUsdtFarm.lpAddresses,
  decimals: 18,
}

const ifos: Ifo[] = [
  {
    id: 'traverse',
    address: '0x7A91E9e685CEaF62185CA3f702d345a14CC55945',
    isActive: true,
    name: 'TRAVERSE (VERSE)',
    poolBasic: {
      saleAmount: '1,000 AVAO',
      raiseAmount: '$1,000',
      lydToBurn: '$1,000',
      distributionRatio: 0.1,
    },
    poolUnlimited: {
      saleAmount: '1,000 AVAO',
      raiseAmount: '$1,000',
      lydToBurn: '$1,000',
      distributionRatio: 0.1,
    },
    currency: avaxUsdtLPToken,
    token: tokens.test9,
    releaseTimestamp: 2639058400,
    campaignId: '3',
    articleUrl: 'https://lydiafinance.medium.com/avaone-ifo-on-lydia-finance-e5d8e17f9aed',
    tokenOfferingPrice: 0.1,
    version: 3,
    releasePercent: [100],
  },
  {
    id: 'avao',
    address: '0x9d9c2A392Bac2Cd045Daf26F7fEA87640E214B3d',
    isActive: false,
    name: 'AvaOne (AVAO)',
    poolBasic: {
      saleAmount: '300,000 AVAO',
      raiseAmount: '$210,000',
      lydToBurn: '$60,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '700,000 AVAO',
      raiseAmount: '$490,000',
      lydToBurn: '$140,000',
      distributionRatio: 0.7,
    },
    currency: avaxUsdtLPToken,
    token: tokens.avao,
    releaseTimestamp: 1639058400,
    campaignId: '2',
    articleUrl: 'https://lydiafinance.medium.com/avaone-ifo-on-lydia-finance-e5d8e17f9aed',
    tokenOfferingPrice: 0.7,
    version: 2,
    releasePercent: [75, 100],
  },
  {
    id: 'maxi',
    address: '0x45d3b4861AEC54f028B650E77db6CcEf1cd2A0Ba',
    isActive: false,
    name: 'MAXIMUS (MAXI)',
    poolBasic: {
      saleAmount: '450,000 MAXI',
      raiseAmount: '$450,000',
      lydToBurn: '$225,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '1,050,000 MAXI',
      raiseAmount: '$1,050,000',
      lydToBurn: '$525,000',
      distributionRatio: 0.7,
    },
    currency: lydAvaxLPToken,
    token: tokens.maxi,
    releaseTimestamp: 1636552800,
    campaignId: '1',
    articleUrl: 'https://lydiafinance.medium.com/maximus-ifo-on-lydia-finance-dc1009a5cde7',
    tokenOfferingPrice: 1,
    version: 2,
    releasePercent: [40, 70, 100],
  },
  {
    id: 'evrt',
    address: '0x66E39268cbBf595FfaAeB17F44fB17cDdd37cd2e',
    isActive: false,
    name: 'EVEREST DAO (EVRT)',
    poolBasic: {
      saleAmount: '6,000,000 EVRT',
      raiseAmount: '$120,000',
      lydToBurn: '$60,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '14,000,000 EVRT',
      raiseAmount: '$280,000',
      lydToBurn: '$140,000',
      distributionRatio: 0.7,
    },
    currency: lydAvaxLPToken,
    token: tokens.evrt,
    releaseTimestamp: 7707736,
    campaignId: '511110001',
    articleUrl: 'https://lydiafinance.medium.com/everest-dao-ifo-on-lydia-finance-6bf983a5c9ad',
    tokenOfferingPrice: 0.02,
    version: 1,
    releasePercent: [],
  },
]

export default ifos
