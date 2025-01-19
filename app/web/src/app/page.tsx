import { Button } from '@/components/ui/button'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
export default function Home() {
  return (
    <>
      <h2 className='mb-2 font-display text-2xl'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p>

      <Button variant={'solid'} size={'sm'} className='font-mono'>
        Hello
      </Button>
    </>
  )
}
