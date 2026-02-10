import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import MainRoutes from "./routes/MainRoutes"
import Footer from "./components/Footer"

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <MainRoutes/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App