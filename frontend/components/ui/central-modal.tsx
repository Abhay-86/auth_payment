"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export function CenterModal({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  const handleInteractOutside = (event: any) => {
    event.preventDefault()
  }

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    event.stopPropagation()
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={className ?? "sm:max-w-[430px]"}
        onInteractOutside={handleInteractOutside}
        onEscapeKeyDown={handleEscapeKeyDown as any}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  )
}