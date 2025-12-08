import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoMentor',
  description: 'EcoMentor connects small businesses with climate-conscious creators to co-create sustainable marketing content and products, leveraging AI-driven insights.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoMentor</h1>
      <p className="mt-4 text-lg">EcoMentor connects small businesses with climate-conscious creators to co-create sustainable marketing content and products, leveraging AI-driven insights.</p>
    </main>
  )
}
