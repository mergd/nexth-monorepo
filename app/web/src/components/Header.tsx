import { SITE_EMOJI } from '@/utils/site'
import { ConnectButton } from './connect'
import LinkComponent from './link-component'
import { ColorModeButton } from './ui/color-mode'

export function Header() {
  return (
    <header className='navbar flex justify-between p-4 pt-1'>
      <LinkComponent href='/'>
        <h1 className='text-xl font-bold'>{SITE_EMOJI}</h1>
      </LinkComponent>

      <div className='flex gap-2'>
        <ColorModeButton />
        <ConnectButton />
      </div>
    </header>
  )
}
