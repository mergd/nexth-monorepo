import { SITE_EMOJI } from '@/utils/site'
import { ConnectButton } from './connect'
import LinkComponent from './link-component'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className='navbar flex justify-between p-4 pt-1'>
      <LinkComponent href='/'>
        <h1 className='text-xl font-bold'>{SITE_EMOJI}</h1>
      </LinkComponent>

      <div className='flex gap-2'>
        <ThemeToggle />
        <ConnectButton />
      </div>
    </header>
  )
}
