import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Component/Login"
import Create from "./Component/Create"
import Update from "./Component/Update"
import User from "./Component/User"

const App=()=>{
    return (
        <BrowserRouter>
        <Login/>
        <Routes>
            <Route element={<Create/>} path="/Create"/>
            <Route element={<User/>} path="/User"/>
            <Route element={<Update/>} path="/Update/:abc"/>
        </Routes>
        </BrowserRouter>
    )
}
export default App