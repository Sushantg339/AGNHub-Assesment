import { lazy } from "react";
import { Route, Routes } from "react-router";
const Services = lazy(()=> import("../pages/Services")) ;
const Home = lazy(()=> (import('../pages/Home')))
const ServiceDetail = lazy(()=> (import('../pages/ServiceDetail')))
const About = lazy(()=> (import('../pages/About')))
const Contact = lazy(()=> (import('../pages/Contact')))

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/services/:id" element={<ServiceDetail/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default MainRoutes