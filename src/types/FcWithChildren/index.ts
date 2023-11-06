import { FC, PropsWithChildren } from "react"

type UnknownObject = Record<number | string, unknown>

export type FcWithChildren<P = UnknownObject> = FC<PropsWithChildren<P>>
