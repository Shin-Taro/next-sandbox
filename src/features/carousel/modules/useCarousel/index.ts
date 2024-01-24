import { useEffect, useRef, useState } from "react"

type Data = unknown[]
type ElementProps = {
  itemWidth: number
  itemGap: number
}

/**
 * @public
 *
 * @description
 * スライドさせたい要素に`transform: var(--transform-x);`を指定してください
 */
export const useCarousel = (data: Data, isDynamicWidth: boolean, elementProps: ElementProps) => {
  const { itemWidth, itemGap } = elementProps

  const [index, setIndex] = useState(0)
  const listRef = useRef<HTMLUListElement>(null)
  const listWidth = listRef.current?.offsetWidth ?? 0

  const handleNext = () => {
    setIndex((prev) => {
      if (prev >= data.length - 3) return prev
      return prev + 1
    })
  }
  const handlePrev = () => {
    setIndex((prev) => {
      if (prev <= 0) return prev
      return prev - 1
    })
  }

  useEffect(() => {
    if (listRef.current) {
      const staticValue = index * (itemWidth + itemGap)
      const dynamicValue = index * listWidth * ((itemWidth + itemGap) / 100)
      const transformXValue = isDynamicWidth ? dynamicValue : staticValue
      listRef.current.style.setProperty("--transform-x", `translateX(-${transformXValue}px)`)
      console.log({ staticValue, dynamicValue, transformXValue })
    }
  }, [listRef, index, listWidth, itemWidth, itemGap, isDynamicWidth])

  return [listRef, { handleNext, handlePrev }, index] as const
}
