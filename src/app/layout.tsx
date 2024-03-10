import "@/styles/globals.css"
import { Header } from "@/components/layouts/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { StyledComponentsRegistry } from "@/lib/styled-components/StyledComponentsRegistry"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js sandbox",
  description: "I'm experimenting with various functions and implementations in Next.js.",
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <StyledComponentsRegistry>
          <main className="mx-auto mt-[60px] w-[90%] text-third">{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
