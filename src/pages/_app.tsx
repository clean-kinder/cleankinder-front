import SideLayout from '@/components/SideLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <SideLayout>
        <Component {...pageProps} />
      </SideLayout>
    );
}

