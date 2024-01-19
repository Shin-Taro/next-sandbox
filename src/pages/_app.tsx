import "@/styles/globals.css"
import { Header } from "@/components/layouts/Header"
import { AppProps } from "next/app"
import { Fragment } from "react"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Header />
    <main className="mx-auto mt-[60px] w-[90%] text-third">
      <Component {...pageProps} />
    </main>
  </Fragment>
)

export default MyApp
