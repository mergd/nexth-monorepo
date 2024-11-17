import { PropsWithChildren } from 'react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export function Layout(props: PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main className='container mx-auto max-w-3xl flex-grow px-4'>{props.children}</main>
      <Footer />
    </div>
  )
}
