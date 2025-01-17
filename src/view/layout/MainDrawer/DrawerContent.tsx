import { useRouter } from 'next/router'
import Image from 'next/image'
import Navigation from './Navigation'
import SimpleBar from 'src/view/components/third-party/SimpleBar'
import { LOGO_PROTOFIRE } from 'src/constants/images'
import { Typography, Stack, Link } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'

const DrawerContent = () => {
  const { pathname } = useRouter()

  return (
    <>
      <SimpleBar
        sx={{
          '& .simplebar-content': {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: '2rem'
          }
        }}
      >
        <Navigation currentPath={pathname} />
      </SimpleBar>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1.2rem'
        }}
      >
        <Typography variant="h5" mb={4}>
          <Link
            href="https://t.me/+u5M4K7vKfbQxZjMx"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <TelegramIcon fontSize="small" sx={{ color: '#ffffff' }} />
            Need Help?
          </Link>
        </Typography>

        <Typography variant="body1" sx={{ color: '#ffffff7d' }}>
          Developed by
        </Typography>
        <Link
          href="https://protofire.io"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Logo protofire"
            src={LOGO_PROTOFIRE}
            width={100}
            height={25}
          />
        </Link>
      </Stack>
    </>
  )
}

export default DrawerContent
