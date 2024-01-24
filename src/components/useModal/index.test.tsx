import { act, renderHook } from "@testing-library/react"

import { useModal } from "."

import type { RenderHookResult } from "@testing-library/react"

describe("useModal", () => {
  let renderHookResult: RenderHookResult<ReturnType<typeof useModal>, undefined>

  beforeEach(() => {
    renderHookResult = renderHook(() => useModal())
  })

  // FIXME: ModalWrapperのレンダリング結果をテスト出来るようにする
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip("初期状態ではModalWrapperはnullを返す", () => {
    let result
    act(() => {
      result = <renderHookResult.result.current.ModalWrapper />
    })
    expect(result).toBeNull()
  })
})
