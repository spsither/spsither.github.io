import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RedirectHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const redirect = params.get('redirect')

    if (redirect) {
      const decoded = decodeURIComponent(redirect)

      // clean URL BEFORE navigating (prevents flicker)
      window.history.replaceState({}, '', decoded)

      navigate(decoded, { replace: true })
    }
  }, [navigate])

  return null
}