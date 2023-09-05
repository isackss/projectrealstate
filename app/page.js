"use client"

import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()
  const session = false

  if(!session) {
    router.push("/dashboard")
  }
  return (
    <main>
    </main>
  )
}
