import styled from 'styled-components'
import FlexLayout from 'components/layout/Flex'

export const ManageLayout = styled(FlexLayout)`
  .manage {
    max-width: 64.5%;
  }

  .nft-container-card {
    max-width: 64.5%;
  }

  .nft-grid {
    display: grid;
    ${({ theme }) => theme.mediaQueries.xs} {
      grid-template-columns: auto;
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      grid-template-columns: auto auto;
    }

    ${({ theme }) => theme.mediaQueries.md} {
      grid-template-columns: auto auto auto;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      grid-template-columns: auto auto auto auto;
    }
  }

  .nft-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 150px;
    margin: 10px;
    padding: 10px;
    border-style: solid !important;
    border-color: grey !important;
    border-radius: 10px !important;
    border: 1px;
    .nft-image {
      display: flex;
      width: 120px;
      padding: 5px;
      justify-content: center;
      cursor: pointer;
    }
    .nft-details {
      width: 120px;
      padding: 5px;
    }
    img {
      display: block !important;
      width: 100px;
    }
  }

  .manage-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .manage-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .manage-footer {
    display: flex;
    justify-content: center;
    align-items: center;

    .manage-btn {
      margin: 0 5px 0 0;
    }
  }
`

export const NftWrapper = styled.div``
