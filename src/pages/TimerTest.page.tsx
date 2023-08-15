import useIdleRedirect from '../hooks/useIdleRedirect.hook'
import { Box } from '@mui/material'

export default function TimerTest() {
  const timer = useIdleRedirect(15, 15)
  const minutes = Math.floor(timer / 60000)
  const seconds = Math.floor((timer % 60000) / 1000)
  return (
    <div>
      <p>
        timer: {minutes}:{seconds < 10 ? '0' : ''}
        {seconds}
      </p>
      <Box sx={{ height: '100vh', bgcolor: 'GrayText' }}></Box>
    </div>
  )
}
