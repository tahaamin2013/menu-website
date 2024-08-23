import { cn } from "@/src/utils/cn"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse bg-gray-200 rounded-md ", className)}
      {...props}
    />
  )
}

export { Skeleton }
