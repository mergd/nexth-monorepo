import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'

export default function Home() {
  return (
    <>
      <h2 className='text-2xl mb-2'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p>

      <div className='mt-4'>
        <h3 className='text-lg mb-2'>😹🫵🏼</h3>
        <p className='mb-4'>hello world</p>
      </div>
    </>
  )
}
