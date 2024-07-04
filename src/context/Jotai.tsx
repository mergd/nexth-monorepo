'use client'

import { Provider, atom } from 'jotai'
import { ReactNode } from 'react'

export const JotaiProvider = (props: { children: ReactNode }) => {
  return <Provider>{props.children}</Provider>
}

