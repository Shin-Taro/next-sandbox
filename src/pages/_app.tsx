import { Header } from "@/shared/components/layouts/Header"
import "@/styles/styles.css"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  )
}

export default App
