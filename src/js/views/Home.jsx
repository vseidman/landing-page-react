import React from "react"
import Jumbotron from "../component/Jumbotron.jsx"
import Menu from "../component/Menu.jsx"
import Card from "../component/Card.jsx"
import Footer from "../component/Footer.jsx"

const Home = () => {
    return ( 
        <div className="container">
        <Menu/>
        <Jumbotron/>
        <Card/>
        <Footer/>
        </div>
    )
}

export default Home