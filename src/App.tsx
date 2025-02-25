import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import GitSearch from "./routes/Home/GitSearch"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route index element={<Navigate to= "/home"/>} />
          <Route path="/home" element={<HomeBody/>}/>
          <Route path="/search:profileName" element={<GitSearch/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      
      </BrowserRouter>   
       </>
  )
}

export default App
