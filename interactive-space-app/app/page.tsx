'use client'

import SpaceScene from '../components/SpaceScene';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative w-full h-[600px]">
        <SpaceScene />
      </div>
      <h1 className="text-4xl font-bold text-center text-white z-10">Welcome to the Interactive Space App</h1>
      <p className="text-xl text-center text-white z-10">Explore the universe with your mouse!</p>
    </main>
  );
}