'use client'

import { useState } from 'react'

export default function InteractiveUI() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-white">
      <h1 className="text-6xl font-bold mb-4">Cosmic Explorer</h1>
      <p className="text-xl mb-8">Navigate the universe with your mouse!</p>
      <button
        className="px-6 py-3 bg-purple-600 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? 'Hide' : 'Show'} Cosmic Info
      </button>
      {showInfo && (
        <div className="mt-8 p-6 bg-black bg-opacity-50 rounded-lg max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">How to Explore:</h2>
          <ul className="list-disc list-inside">
            <li>Click and drag to rotate the view</li>
            <li>Scroll to zoom in and out</li>
            <li>Move your mouse to control the spaceship</li>
            <li>Click on planets to interact with them</li>
          </ul>
        </div>
      )}
    </div>
  )
}