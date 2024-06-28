import React from 'react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

type TooltipProps = {
  children: React.ReactNode
  tooltipText?: string
  className?: string
}

export default function TooltipComponent(props: TooltipProps) {
  return (
    <TooltipProvider delayDuration={400}>
      <Tooltip>
        <TooltipTrigger>{props.children}</TooltipTrigger>
        <TooltipContent className={cn(props.className)}>{props.tooltipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
