import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-[100%] mx-auto items-center justify-center">
     <Navbar />
     </div>
      <Hero />
    </div>
  )
}
