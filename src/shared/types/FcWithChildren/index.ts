import { FC, PropsWithChildren } from "react"

type UnknownObject = Record<number | string, unknown>

/**
 * @public
 */
export type FcWithChildren<P = UnknownObject> = FC<PropsWithChildren<P>>
