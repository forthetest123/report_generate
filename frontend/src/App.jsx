import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "./pages/Test";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Test />} />
        {/* <Route path="/" element={<ReportForm/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
