import React from 'react'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import Logo from '../public/Images/Logo.png'
import Link from 'next/link'
import  Button  from '../Components/Button'
// import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {
    return (
        <div className = {styles.navbar}>
            <div className = {styles.img}>
                <Image src = {Logo} width = {210} height = {110} alt = "Mbikes_logo"/>
            </div>
            <div className = {styles.links}>
            
                <span>
                    <Link href = "/">
                    <a>Home</a>
                    </Link>
                </span>
                <span>
                    <Link href = "#services">
                    <a>Model</a>
                    </Link>
                </span>
                <span>
                    <Link href = "#footer">
                    <a>Contact</a>
                    </Link>
                </span>
                
            </div>
            <Button text = 'Login'/>
        </div>
    )
}

export default Navbar
