import './App.css'
import { ThemeProvider } from "@/components/ThemeProvider.tsx"
import {NavBar} from "@/components/NavBar.tsx";
import {SideBar} from "@/components/SideBar.tsx";
import {DashBoard} from "@/components/DashBoard.tsx";

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar/>
          <div className="flex h-screen">
              <SideBar/>
              <div className="w-full">
                  <DashBoard/>
              </div>
          </div>
      </ThemeProvider>
    </>
  )
}

export default App
