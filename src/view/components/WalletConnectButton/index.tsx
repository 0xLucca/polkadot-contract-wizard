import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { useNetworkAccountsContext } from 'src/context/NetworkAccountsContext'
import { DomainEvents } from 'src/domain/DomainEvents'
import { StyledButton, MyButtonProps } from '../Button'
import { ModalMessage } from '@components'
import { AccountSelect } from './AccountsSelect'
import { accountsInPossession } from 'src/domain/KeyringAccouns'

export const ConnectButton = styled(StyledButton)<MyButtonProps>(() => ({
  padding: '0rem',
  fontSize: '1rem'
}))

export const WalletConnectButton = () => {
  const {
    state: { apiStatus, accountStatus, currentAccount, keyring },
    setCurrentAccount
  } = useNetworkAccountsContext()
  const isLoading = apiStatus === 'CONNECTING' || accountStatus === 'CONNECTING'
  const [openModal, setOpenModal] = useState(false)

  const dispatchConnect = () => {
    document.dispatchEvent(new CustomEvent(DomainEvents.walletConnectInit))
  }

  return (
    <>
      {accountStatus === 'DISCONNECTED' || accountStatus === 'CONNECTING' ? (
        <ConnectButton
          loading={isLoading}
          size="small"
          onClick={dispatchConnect}
        >
          Connect
        </ConnectButton>
      ) : (
        keyring &&
        currentAccount && (
          <AccountSelect
            currentAccount={currentAccount}
            accounts={accountsInPossession(keyring)}
            onChange={setCurrentAccount}
          />
        )
      )}

      <ModalMessage
        open={openModal}
        handleClose={() => setOpenModal(false)}
        title="There is not Extensions available to connect to Polkadot network"
        body="There is not polkadot wallet installed or it is possible that you
      rejected the wallet connection (Please open the wallet and delete the
      rejected action)."
      />
    </>
  )
}