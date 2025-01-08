import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <>
      <h2 className='mb-2 text-2xl'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p>

      <Button>Click me</Button>
    </>
  )
}
