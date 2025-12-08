import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoPayz',
  description: 'A personal finance app that integrates sustainable e-commerce practices to help conscious consumers make environmentally friendly purchasing decisions while managing their finances.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoPayz</h1>
      <p className="mt-4 text-lg">A personal finance app that integrates sustainable e-commerce practices to help conscious consumers make environmentally friendly purchasing decisions while managing their finances.</p>
    </main>
  )
}
