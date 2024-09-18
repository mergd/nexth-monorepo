import React, { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
type LinkCProps = {
  href: string
  isExternal?: boolean
  className?: string
  linkText?: string
  children?: ReactNode
  isUnderlined?: boolean
}

export default function LinkComponent(props: LinkCProps) {
  if (props.isExternal) {
    return (
      <Link
        className={cn(
          'hover:text-primary/80',
          props.className,
          props.isUnderlined ? 'underline underline-offset-1' : ''
        )}
        href={props.href}
        target='_blank'
        rel='noopener noreferrer'>
        {props.children ?? props.linkText ?? props.href}
      </Link>
    )
  }
  return (
    <Link
      className={cn('hover:text-primary/70', props.className, props.isUnderlined ? 'underline underline-offset-1' : '')}
      href={props.href}>
      {props.children ?? props.linkText ?? props.href}
    </Link>
  )
}
