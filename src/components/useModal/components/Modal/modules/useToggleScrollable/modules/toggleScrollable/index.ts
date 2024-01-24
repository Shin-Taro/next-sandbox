export const toggleScrollable = (
  element: HTMLElement,
  isScrollable: boolean,
) => {
  // 離れた要素のstyleを動的に変更するため。
  // eslint-disable-next-line no-param-reassign
  element.style.overflowY = isScrollable ? "auto" : "hidden"
}
