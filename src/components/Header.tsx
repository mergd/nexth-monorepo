import { SITE_EMOJI } from '@/utils/site'
import { Connect } from './Connect'
import LinkComponent from './LinkComponent'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className='navbar flex justify-between p-4 pt-1'>
      <LinkComponent href='/'>
        <h1 className='text-xl font-bold'>{SITE_EMOJI}</h1>
      </LinkComponent>

      <div className='flex gap-2'>
        <ThemeToggle />
        <Connect />
      </div>
    </header>
  )
}
