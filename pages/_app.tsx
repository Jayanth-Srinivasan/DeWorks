import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Outfit, Work_Sans} from 'next/font/google';

const outfit = Outfit({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-outfit',
})

const workSans = Work_Sans({
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-work-sans'
})

export default function App({ Component, pageProps }: AppProps) {
  return  (<main className={`${outfit.variable} ${workSans.variable}`}>
      <Component {...pageProps} />
    </main>)
}
