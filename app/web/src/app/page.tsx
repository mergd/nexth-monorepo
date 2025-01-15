import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'

export default function Home() {
  return (
    <>
      <h2 className='mb-2 text-2xl'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div>Click me</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
