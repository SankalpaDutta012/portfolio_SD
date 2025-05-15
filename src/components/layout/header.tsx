
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-primary">
            <rect width="256" height="256" fill="none"></rect>
            <path d="M128,24a104,104,0,1,0,104,104A104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM100,100a28,28,0,1,1,28,28A28.1,28.1,0,0,1,100,100Z"></path>
          </svg>
          <span className="font-bold">Sankalpa's Space</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-2 md:space-x-4 text-sm md:text-base">
          <Button variant="link" asChild><Link href="#about">About</Link></Button>
          <Button variant="link" asChild><Link href="#projects">Projects</Link></Button>
          <Button variant="link" asChild><Link href="#skills">Skills</Link></Button>
          <Button variant="link" asChild><Link href="#field-of-interest">Field of Interest</Link></Button> 
          <Button variant="link" asChild><Link href="#contact">Contact</Link></Button>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
