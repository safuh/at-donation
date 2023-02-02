import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['eng'] })

export default function Home() {
  return (
    <Layout>
      Hello world!
    </h1>
  )
}
