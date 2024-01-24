import { FC } from "react"
import { css } from "styled-system/css"
import { useCarousel } from "../../modules/useCarousel"

type Data = {
  title: string
  description: string
  id: string
}

/**
 * @public
 */
export const Carousel: FC = () => {
  const [listRef, { handlePrev, handleNext }] = useCarousel(data, true, { itemWidth, itemGap })

  return (
    <div className={container}>
      <ul className={list} ref={listRef}>
        {data.map((item) => (
          <li key={item.id} className={listItem}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <div className={buttonContainer}>
        <button className={button} onClick={handlePrev}>
          prev
        </button>
        <button className={button} onClick={handleNext}>
          next
        </button>
      </div>
    </div>
  )
}

const itemWidth = 28
const itemGap = 8

const container = css({
  width: "100%",
  overflowX: "hidden",
})

const list = css({
  display: "flex",
  gap: `${itemGap}%`,
  transform: "var(--transform-x)",
  transition: "transform 0.3s ease-in-out",
})

const listItem = css({
  width: `${itemWidth}%`,
  border: "1px solid #ccc",
  borderRadius: "5px",
  flexShrink: 0,
  padding: "15px 10px",
})

const buttonContainer = css({
  display: "flex",
  justifyContent: "space-around",
  width: "50%",
  marginInline: "auto",
  marginTop: "20px",
})

const button = css({
  padding: "10px",
  fontSize: "1.2rem",
  border: "1px solid #ccc",
  borderRadius: "20%",
  cursor: "pointer",
})

const data: Data[] = [
  {
    title: "Title 1",
    description: "Description 1",
    id: "1",
  },
  {
    title: "Title 2",
    description: "Description 2",
    id: "2",
  },
  {
    title: "Title 3",
    description: "Description 3",
    id: "3",
  },
  {
    title: "Title 4",
    description: "Description 4",
    id: "4",
  },
  {
    title: "Title 5",
    description: "Description 5",
    id: "5",
  },
  {
    title: "Title 6",
    description: "Description 6",
    id: "6",
  },
  {
    title: "Title 7",
    description: "Description 7",
    id: "7",
  },
  {
    title: "Title 8",
    description: "Description 8",
    id: "8",
  },
  {
    title: "Title 9",
    description: "Description 9",
    id: "9",
  },
  {
    title: "Title 10",
    description: "Description 10",
    id: "10",
  },
  {
    title: "Title 11",
    description: "Description 11",
    id: "11",
  },
  {
    title: "Title 12",
    description: "Description 12",
    id: "12",
  },
]
