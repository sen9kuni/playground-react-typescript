import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function useIdleRedirect(
  initialMinutes: number = 15,
  idleMinutes: number = 15,
  redirectUrl: string = '/redirect'
): number {
  const initialTime = initialMinutes * 60000 // konversi menit ke milidetik
  const idleTime = idleMinutes * 60000 // konversi menit ke milidetik
  const navigate = useNavigate()
  const [timer, setTimer] = useState<number>(initialTime)

  const resetTimer = () => {
    setTimer(idleTime)
  }

  const handleUserActivity = () => {
    resetTimer()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1000)
    }, 1000)

    const idleTimeOut = setTimeout(() => {
      navigate(redirectUrl)
    }, timer)

    document.addEventListener('keyup', handleUserActivity)
    document.addEventListener('keydown', handleUserActivity)
    document.addEventListener('click', handleUserActivity)

    return () => {
      clearInterval(interval)
      clearTimeout(idleTimeOut)
      document.removeEventListener('keyup', handleUserActivity)
      document.removeEventListener('keydown', handleUserActivity)
      document.removeEventListener('click', handleUserActivity)
    }
  }, [timer, redirectUrl, navigate])
  return timer
}
