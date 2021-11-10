import { ChainId } from '@lydiafinance/sdk'

import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 3,
    lpSymbol: 'USDT-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xca3953bb2011aa6a5af2a584562277bde65fa020',
      [ChainId.AVALANCHE]: '0x752c59f22faaa861108649f4596034796c69bc3f',
    },
    token: tokens.usdt,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 16,
    lpSymbol: 'LYD-USDT.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1718309E2AD61A945FCD242F28Dc83339b5d6192',
      [ChainId.AVALANCHE]: '0x1718309E2AD61A945FCD242F28Dc83339b5d6192',
    },
    token: tokens.usdt_e,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 26,
    lpSymbol: 'DAI.e-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x4ee072c5946b4cdc00cbdeb4a4e54a03cf6d08d3',
      [ChainId.AVALANCHE]: '0x4ee072c5946b4cdc00cbdeb4a4e54a03cf6d08d3',
    },
    token: tokens.dai_e,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 4,
    lpSymbol: 'AVAX-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x21A735A9c3f00EF3099D6a945F71d148840F4918',
      [ChainId.AVALANCHE]: '0xfba4edaad3248b03f1a3261ad06ad846a8e50765',
    },
    token: tokens.lyd,
    quoteToken: tokens.wavax,
    tokenSymbol: 'LYD',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 7,
    lpSymbol: 'PNG-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7',
      [ChainId.AVALANCHE]: '0x161f750b753c7120599d07c352607F458ecB918e',
    },
    token: tokens.png,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 9,
    lpSymbol: 'ETH-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7',
      [ChainId.AVALANCHE]: '0xEAC3778e5658667B72aEbe8C71F97ed8b3b5887b',
    },
    token: tokens.eth,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 19,
    lpSymbol: 'ETH.e-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x7Be2c5B9dEE94102cF3920BF7192010Be04D806B',
      [ChainId.AVALANCHE]: '0x7Be2c5B9dEE94102cF3920BF7192010Be04D806B',
    },
    token: tokens.eth_e,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 10,
    lpSymbol: 'SNOB-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1ccd24def23a742d56a976810ca5bda37b43744d',
      [ChainId.AVALANCHE]: '0x805B7d20e92893FF4b68c83E40c1Fc9A7a6162Fa',
    },
    token: tokens.snob,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 30,
    lpSymbol: 'PEFI-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xCC592739C6c64f797E46CD00f12a6f15c2DF1c04',
      [ChainId.AVALANCHE]: '0xCC592739C6c64f797E46CD00f12a6f15c2DF1c04',
    },
    token: tokens.pefi,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 42,
    lpSymbol: 'AVAX-MAXI LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x0D9B1f890a7ebF861737d890D49dC1Fe4F7D782F',
      [ChainId.AVALANCHE]: '0x0D9B1f890a7ebF861737d890D49dC1Fe4F7D782F',
    },
    token: tokens.maxi,
    quoteToken: tokens.wavax,
    tokenSymbol: 'MAXI',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 29,
    lpSymbol: 'USDT.e-PEFI LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xdb57a10b415fb4f246fca159bb9b98ad0b126a71',
      [ChainId.AVALANCHE]: '0xdb57a10b415fb4f246fca159bb9b98ad0b126a71',
    },
    token: tokens.pefi,
    quoteToken: tokens.usdt_e,
    tokenSymbol: 'PEFI',
    quoteTokenAdresses: tokens.usdt_e,
    isFinished: false,
  },
  {
    pid: 11,
    lpSymbol: 'XAVA-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x5BC783079e9A04c67436D6E712D5e73099c08f16',
      [ChainId.AVALANCHE]: '0x5BC783079e9A04c67436D6E712D5e73099c08f16',
    },
    token: tokens.xava,
    quoteToken: tokens.lyd,
    isFinished: true,
  },
  {
    pid: 1,
    lpSymbol: 'AVAX-USDT LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xb239eafea4e312f9409f96493a5f24bb4a23af18',
      [ChainId.AVALANCHE]: '0xe22a65204726f102d9e3539b85d3999dee2e421f',
    },
    token: tokens.usdt,
    quoteToken: tokens.wavax,
    isFinished: true,
  },
  {
    pid: 17,
    lpSymbol: 'AVAX-USDT.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x5Fc70cF6A4A858Cf4124013047e408367EBa1ace',
      [ChainId.AVALANCHE]: '0x5Fc70cF6A4A858Cf4124013047e408367EBa1ace',
    },
    token: tokens.usdt_e,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 2,
    lpSymbol: 'AVAX-ETH LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1ccd24def23a742d56a976810ca5bda37b43744d',
      [ChainId.AVALANCHE]: '0x58128ab3ecbf703682ede72f341944bffe3524b9',
    },
    token: tokens.eth,
    quoteToken: tokens.wavax,
    isFinished: true,
  },
  {
    pid: 18,
    lpSymbol: 'AVAX-ETH.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xb74791cc65479132b52043b764bbB540439fdf02',
      [ChainId.AVALANCHE]: '0xb74791cc65479132b52043b764bbB540439fdf02',
    },
    token: tokens.eth_e,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 6,
    lpSymbol: 'SUSHI-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1ccd24def23a742d56a976810ca5bda37b43744d',
      [ChainId.AVALANCHE]: '0xF1d9d971ab9231759d952B22223B4D76D8b181E5',
    },
    token: tokens.sushi,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 20,
    lpSymbol: 'AVAX-SUSHI.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xb4C629d453769835c2c4C6211AD0F67364D02770',
      [ChainId.AVALANCHE]: '0xb4C629d453769835c2c4C6211AD0F67364D02770',
    },
    token: tokens.sushi_e,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 8,
    lpSymbol: 'AVAX-WBTC LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1ccd24def23a742d56a976810ca5bda37b43744d',
      [ChainId.AVALANCHE]: '0x9cfb46d0b92ac83aaa9ed0913f3f01cdbe22176d',
    },
    token: tokens.wbtc,
    quoteToken: tokens.wavax,
    isFinished: true,
  },
  {
    pid: 21,
    lpSymbol: 'AVAX-WBTC.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x67edA35115D7Fd6930f95513472629211D827feE',
      [ChainId.AVALANCHE]: '0x67edA35115D7Fd6930f95513472629211D827feE',
    },
    token: tokens.wbtc_e,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 40,
    lpSymbol: 'AVAX-USDC.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xde5EFeD768113778e502452c01171c4C81df8Cf7',
      [ChainId.AVALANCHE]: '0xde5EFeD768113778e502452c01171c4C81df8Cf7',
    },
    token: tokens.usdc_e,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 41,
    lpSymbol: 'AVAX-DAI.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xf38DDfc7499C6f80Df10d63483627937568D328f',
      [ChainId.AVALANCHE]: '0xf38DDfc7499C6f80Df10d63483627937568D328f',
    },
    token: tokens.dai_e,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 12,
    lpSymbol: 'USDT-DAI LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1ccd24def23a742d56a976810ca5bda37b43744d',
      [ChainId.AVALANCHE]: '0x3cebc2b0febf521494f06318bbe202ae7ee799c9',
    },
    token: tokens.dai,
    quoteToken: tokens.usdt,
    isFinished: true,
  },
  {
    pid: 22,
    lpSymbol: 'USDT.e-DAI.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x7AbaB5474385918820dfBC7f35712084a91B583a',
      [ChainId.AVALANCHE]: '0x7AbaB5474385918820dfBC7f35712084a91B583a',
    },
    token: tokens.dai_e,
    quoteToken: tokens.usdt_e,
    isFinished: false,
  },
  {
    pid: 27,
    lpSymbol: 'USDT.e-USDC.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xc25251390dc341daeb0b928dd7113aeec7504a2c',
      [ChainId.AVALANCHE]: '0xc25251390dc341daeb0b928dd7113aeec7504a2c',
    },
    token: tokens.usdc_e,
    quoteToken: tokens.usdt_e,
    isFinished: false,
  },
  {
    pid: 37,
    lpSymbol: 'AVAX-AAVE.E LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x0e6f1caf066e15b619e31c834117e11bdecf5440',
      [ChainId.AVALANCHE]: '0x0e6f1caf066e15b619e31c834117e11bdecf5440',
    },
    token: tokens.aave_e,
    quoteToken: tokens.wavax,
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 13,
    lpSymbol: 'AVAX-YAK LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x590673007Ff2839818cB1155926758E5F969d821',
      [ChainId.AVALANCHE]: '0x590673007Ff2839818cB1155926758E5F969d821',
    },
    token: tokens.yak,
    quoteToken: tokens.wavax,
    tokenSymbol: 'YAK',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 35,
    lpSymbol: 'AVAX-mYAK LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xb25538eade2ab3144db8d9791d6fc6e3fd99bdb5',
      [ChainId.AVALANCHE]: '0xb25538eade2ab3144db8d9791d6fc6e3fd99bdb5',
    },
    token: tokens.m_yak,
    quoteToken: tokens.wavax,
    tokenSymbol: 'mYAK',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 14,
    lpSymbol: 'AVAX-LINK LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xF8FbB3c62Feb73E10914D03E5524093955E702CA',
      [ChainId.AVALANCHE]: '0xF8FbB3c62Feb73E10914D03E5524093955E702CA',
    },
    token: tokens.link,
    quoteToken: tokens.wavax,
    tokenSymbol: 'LINK',
    quoteTokenAdresses: tokens.wavax,
    isFinished: true,
  },
  {
    pid: 23,
    lpSymbol: 'AVAX-LINK.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x2d560eEe40979368162ca4Ac7Ec39c8421cc732B',
      [ChainId.AVALANCHE]: '0x2d560eEe40979368162ca4Ac7Ec39c8421cc732B',
    },
    token: tokens.link_e,
    quoteToken: tokens.wavax,
    tokenSymbol: 'LINK.e',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 15,
    lpSymbol: 'AVAX-QI LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xF8FbB3c62Feb73E10914D03E5524093955E702CA',
      [ChainId.AVALANCHE]: '0x983E459d81f83D57757E1dDfB1318deF8A82c001',
    },
    token: tokens.qi,
    quoteToken: tokens.wavax,
    tokenSymbol: 'QI',
    quoteTokenAdresses: tokens.qi,
    isFinished: false,
  },
  {
    pid: 24,
    lpSymbol: 'AVAX-XAVA LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x8cE7dF6508a2783480db7063809c3dabB01893f5',
      [ChainId.AVALANCHE]: '0x8cE7dF6508a2783480db7063809c3dabB01893f5',
    },
    token: tokens.xava,
    quoteToken: tokens.wavax,
    tokenSymbol: 'XAVA',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 25,
    lpSymbol: 'AVAX-VSO LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x4c9b23dfff6a15cad84008ecf5b424b715d8e82c',
      [ChainId.AVALANCHE]: '0x4c9b23dfff6a15cad84008ecf5b424b715d8e82c',
    },
    token: tokens.vso,
    quoteToken: tokens.wavax,
    tokenSymbol: 'VSO',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 28,
    lpSymbol: 'AVAX-aAVAXb LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xba4486e7a6f74be11fb7159d205f876168c906aa',
      [ChainId.AVALANCHE]: '0xba4486e7a6f74be11fb7159d205f876168c906aa',
    },
    token: tokens.a_avax_b,
    quoteToken: tokens.wavax,
    tokenSymbol: 'aAVAXb',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 31,
    lpSymbol: 'AVAX-EVRT LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x26bbBf5104F99Dd1d6e61fF54980E78edcb0ba29',
      [ChainId.AVALANCHE]: '0x26bbBf5104F99Dd1d6e61fF54980E78edcb0ba29',
    },
    token: tokens.evrt,
    quoteToken: tokens.wavax,
    tokenSymbol: 'EVRT',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 32,
    lpSymbol: 'AVAX-DUEL LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xc70b2E0cB6946BD7EC71d2a3cC810fBDfa425a11',
      [ChainId.AVALANCHE]: '0xc70b2E0cB6946BD7EC71d2a3cC810fBDfa425a11',
    },
    token: tokens.duel,
    quoteToken: tokens.wavax,
    tokenSymbol: 'DUEL',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 33,
    lpSymbol: 'AVAX-SNOB LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xf3184Da6b212597E818bF0D09f719386fe650d59',
      [ChainId.AVALANCHE]: '0xf3184Da6b212597E818bF0D09f719386fe650d59',
    },
    token: tokens.snob,
    quoteToken: tokens.wavax,
    tokenSymbol: 'SNOB',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 34,
    lpSymbol: 'AVAX-JOE LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x211e7A5e69c8cd07bbB6dFFe61Ab2680df5c8447',
      [ChainId.AVALANCHE]: '0x211e7A5e69c8cd07bbB6dFFe61Ab2680df5c8447',
    },
    token: tokens.joe,
    quoteToken: tokens.wavax,
    tokenSymbol: 'JOE',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 36,
    lpSymbol: 'AVAX-AVME LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xB54591864811D46A372A16593165bbE0aED4F450',
      [ChainId.AVALANCHE]: '0xB54591864811D46A372A16593165bbE0aED4F450',
    },
    token: tokens.avme,
    quoteToken: tokens.wavax,
    tokenSymbol: 'AVME',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 38,
    lpSymbol: 'AVAX-PNG LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x264b5ccccC16D6328cd8e0032Ef90eF5Aba78c72',
      [ChainId.AVALANCHE]: '0x264b5ccccC16D6328cd8e0032Ef90eF5Aba78c72',
    },
    token: tokens.png,
    quoteToken: tokens.wavax,
    tokenSymbol: 'PNG',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 39,
    lpSymbol: 'AVAX-TEDDY LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x0a94056FC82b10593FE8fc3E048A2d642e0D53Db',
      [ChainId.AVALANCHE]: '0x0a94056FC82b10593FE8fc3E048A2d642e0D53Db',
    },
    token: tokens.teddy,
    quoteToken: tokens.wavax,
    tokenSymbol: 'TEDDY',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
]

export default farms
