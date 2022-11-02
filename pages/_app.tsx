import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import '../styles/globals.css'

type _History = {
  previous: string | null
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [history, setHistory] = useState<_History>({
    previous: null
  })

  useEffect(() => {
    setHistory({ previous: router.asPath })
  }, [router.asPath])

  return <Component {...pageProps} lastPage={history.previous} />
}
