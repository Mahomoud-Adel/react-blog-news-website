import { Route, Routes } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import HomePage from "./pages/HomePage"


function App() {


  return (
    <Routes>
      <Route element={<RootLayout />} >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
