import React from 'react'
import Image from 'next/image' 
import styles from "../styles/Footer.module.css"
import Logo from '../public/Images/Logo.png'
import  Button  from '../Components/Button'

const Footer = () => {
    return (
        <footer id= "footer" className ={styles.footer}>
            <div className = {styles.content}>
            <Image src = {Logo} width = {210} height = {110} alt = "Mbikes_logo"/>
            <p className = {styles.p}> Lorem ipsum dolor sit amet consectetur adipis</p>
            </div>
            <div className = {styles.content}>
                <h3>News</h3>
                <p>Features</p>
                <p>Help</p>
            </div>
            <div className = {styles.content}>
                <h3>Resources</h3>
                <p>Services</p>
                <p>Navigations</p>
            </div>
            <div className = {styles.content}>
                <h3>Contact</h3>
                <input placeholder= "Email"/> <Button text = 'Send'/>
            </div>
        </footer>
    )
}

export default Footer
