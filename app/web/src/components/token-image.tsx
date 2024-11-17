'use client'
import Image from 'next/image'
import { useState } from 'react'
type ImageProps = {
  src: string
  alt: string
  width: number
  height: number
  fallback?: string
}

export default function ImageFallback(props: ImageProps) {
  const [imgSrc, setImgSrc] = useState(props.src)

  const fallback = props.fallback || '/icons/eth-icon.png'
  return (
    <div>
      <Image
        key={props.src}
        src={imgSrc}
        alt={props.alt}
        width={props.width}
        height={props.height}
        layout='fill'
        objectFit='contain'
        onError={(e) => {
          setImgSrc(fallback)
        }}
      />
    </div>
  )
}
