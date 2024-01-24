import { Carousel } from "@/features/carousel/components/Carousel"
import { CommonModal } from "@/features/modal/components/CommonModal"
import { css } from "styled-system/css"

const Home = () => {
  return (
    <section className={container}>
      <h2>main</h2>
      <div className={middleContainer}>
        <CommonModal />
      </div>
      <div className={middleContainer}>
        <Carousel />
      </div>
    </section>
  )
}

export default Home

const container = css({
  width: "80vw",
  margin: "0 auto",
})

const middleContainer = css({
  marginTop: "20px",
})
