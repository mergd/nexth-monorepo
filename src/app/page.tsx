import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'

export default function Home() {
  return (
    <>
      <h2 className='mb-2 text-2xl'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p>

      <div className='mt-4'>
        <p className='mb-4'>hello world</p>
      </div>
    </>
  )
}
