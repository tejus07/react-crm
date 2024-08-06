import './App.css'
import { ThemeProvider } from "@/components/ThemeProvider.tsx"
import {NavBar} from "@/components/NavBar.tsx";
import {SideBar} from "@/components/SideBar.tsx";
import {DashBoard} from "@/components/DashBoard.tsx";
import { AlertDialogue } from '@/components/AlertDialogue';

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AlertDialogue/>
        <NavBar/>
          <div className="flex h-screen">
              <SideBar/>
              <div className="w-full custom-background-dashboard">
                  <DashBoard/>
              </div>
          </div>
      </ThemeProvider>
    </>
  )
}

export default App
