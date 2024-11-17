import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import React from 'react'

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
