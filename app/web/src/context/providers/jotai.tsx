'use client'

import { Provider } from 'jotai'
import { ReactNode } from 'react'

export const JotaiProvider = (props: { children: ReactNode }) => {
  return <Provider>{props.children}</Provider>
}
