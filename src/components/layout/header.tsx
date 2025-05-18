
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { PanelLeft } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex min-h-14 py-2 sm:py-0 max-w-screen-2xl items-center">
        <div className="flex items-center">
          <SidebarTrigger className="mr-2 md:hidden"> {/* Only show on mobile, or adjust as needed */}
            <PanelLeft />
          </SidebarTrigger>
          <Link href="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-primary">
              <rect width="256" height="256" fill="none"></rect>
              <path d="M128,24a104,104,0,1,0,104,104A104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM100,100a28,28,0,1,1,28,28A28.1,28.1,0,0,1,100,100Z"></path>
            </svg>
            <span className="font-bold">Sankalpa's Space</span>
          </Link>
        </div>
        
        {/* Navigation links are now in the sidebar */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
