'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const SpaceScene = dynamic(() => import('./SpaceScene'), { ssr: false })

export default function Scene() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SpaceScene />
    </Suspense>
  )
}