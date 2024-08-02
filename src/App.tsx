import './App.css'
import { Button } from "@/components/ui/button"
import { UserNav } from './components/user-nav'
import { MainNav } from './components/MainNav'
import { Search } from './components/Search'
import { ThemeProvider } from "@/components/theme-provider"
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="hidden flex-col md:flex custom-background">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
      
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
            
              <Search />
              <div className="ml-auto flex items-center space-x-4">
                <Button variant="ghost" className="relative h-8 w-8 rounded-full overflow:hidden">
                  <Avatar className="h-8 w-8">
                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                </Button>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full overflow:hidden">
                  <Avatar className="h-8 w-8">
                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                </Button>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full overflow:hidden">
                  <Avatar className="h-8 w-8">
                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
                </Button>
                <UserNav />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
