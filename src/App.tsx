import './App.css'
import { Button } from "@/components/ui/button"
import { UserNav } from './components/user-nav'
import { MainNav } from './components/MainNav'
import { Search } from './components/Search'


function App() {

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
      </div>l
    </>
  )
}

export default App
