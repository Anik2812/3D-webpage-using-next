'use client'

import { useState } from 'react'

export default function InteractiveUI() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-between p-8 pointer-events-none">
      <div className="w-full flex justify-between items-start">
        <div className="bg-black bg-opacity-75 p-6 rounded-lg pointer-events-auto">
          <h1 className="text-5xl font-bold mb-3 text-blue-300">Cosmic Explorer</h1>
          <p className="text-2xl text-gray-300">Navigate the Solar System</p>
        </div>
        <button
          className="px-8 py-4 bg-purple-600 rounded-full text-xl font-semibold hover:bg-purple-700 transition-colors pointer-events-auto"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? 'Hide' : 'Show'} Controls
        </button>
      </div>
      {showInfo && (
        <div className="mt-8 p-8 bg-black bg-opacity-75 rounded-lg max-w-lg pointer-events-auto">
          <h2 className="text-3xl font-bold mb-4 text-blue-300">How to Explore:</h2>
          <ul className="list-disc list-inside text-xl text-gray-300">
            <li>Click and drag to rotate the view</li>
            <li>Scroll to zoom in and out</li>
            <li>Move your mouse to control the spaceship</li>
            <li>Click on planets to view information</li>
          </ul>
        </div>
      )}
    </div>
  )
}