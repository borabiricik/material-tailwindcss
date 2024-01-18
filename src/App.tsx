import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/page"

const App = () => {
  return (
    <div className="p-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
