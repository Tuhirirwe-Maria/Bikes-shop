import  Button  from '../Components/Button'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Bike from '../public/Images/Kawasaki_3.png'
import { Card, CardGroup } from 'react-bootstrap'
import Honda from '../public/Images/Honda-red.png'
import Kawasaki from '../public/Images/black kawasaki.png'
import BMW from '../public/Images/bmw-3.png'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { FaTruck,FaMoneyBill,FaBusinessTime,FaCreditCard,FaArrowCircleUp } from "react-icons/fa";
import Footer from '../Components/Footer'
import Link from 'next/link'


export default function Home() {
  useEffect(() => {
    Aos.init({duration :1000 });
    
  }, []);
  return (
    <div>
    <div className={styles.container}>
      <Head>
        <title>🏍 MBikes</title>
      </Head>
         <Navbar/>
       <div className = {styles.header}>
         <div className = {styles.content}>
           <div className= {styles.content_1}>
           <p >
            Lets Ride 
            </p>
            <p >with a Smile</p>
           </div>
            
            <p className= {styles.content_2}>
            A bike is the thing which want to buy with my own money rather than earning it with my parents money
            </p>
            <div  className= {styles.btn}>
            <Button text = "Book Now "/>
            </div>
            <div className = {styles.about_bike}>
              <span>
                <h1>296 cc </h1>
                <p>Engine Power</p>
              </span>
              <span>
                <h1>396 bhp </h1>
                <p>Max Power</p>
              </span>
              <span>
                <h1>179  Kg </h1>
                <p>Weight</p>
              </span>
            </div>
         </div>
         <div className = {styles.bike}>
         <Image src = {Bike}  alt = "Kawasaki bike"/>
         </div>
       </div>
      
    </div>
  
    <section className = {styles.section} data-aos = "fade-up">
          <h1>Variants of Bikes</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi </p>

       </section >
     <CardGroup className = {styles.cards} data-aos = "fade-up">
       <Card style={{ width: '18rem' }} className = {styles.Card} data-aos = "fade-left">
         <Image src={Honda }/>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Title className = {styles.title}>Honda CBR 250R</Card.Title>
          <Card.Text className = {styles.text}>
          ⭐️⭐️⭐️⭐️⭐️
          </Card.Text>
          <Button text = "Book Now "/>
        </Card.Body>
        </Card>  
        <Card style={{ width: '18rem' }} className = {styles.Card} data-aos = "fade-down">
         <Image src={Kawasaki }/>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Title  className = {styles.title}>Kawasaki Ninja 300</Card.Title>
          <Card.Text className = {styles.text}>
          ⭐️⭐️⭐️⭐️⭐️
          </Card.Text>
          <Button text = "Book Now"/>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className = {styles.Card} data-aos = "fade-right">
         <Image src={BMW }/>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Title  className = {styles.title}> BMW R 1250 RS</Card.Title>
          <Card.Text className = {styles.text}>
          ⭐️⭐️⭐️⭐️⭐️
          </Card.Text>
          <Button text = "Book Now"  />
        </Card.Body>
        </Card>
      </CardGroup>..
      <Link href = "/">
   <a><FaArrowCircleUp className={styles.stick}/></a>
   </Link>
     <section id="services" className = {styles.services} data-aos = "fade-up">
       <h1>Our Service Makes  Life Easier</h1>
       <div className = {styles.service_items}>
       <Card className = {styles.card} style={{ width: '10rem' }} data-aos = "fade-up">
        <FaTruck className = {styles.card_icon}/>
        <div className = {styles.card_body}>
          <h3 className = "card-title">Free shipping</h3>
          <p className = "card-text">Free delivery to all areas</p>
         
        </div>
      </Card>
      <Card className = {styles.card} style={{ width: '10rem' }} data-aos = "fade-up">
        <FaMoneyBill className = {styles.card_icon}/>
        <div className = {styles.card_body}>
          <h3 className = "card-title">Money Guarantee</h3>
          <p className = "card-text">30 days money back</p>
         
        </div>
      </Card>
      <Card className = {styles.card} style={{ width: '10rem' }} data-aos = "fade-up">
        <FaBusinessTime className = {styles.card_icon}/>
        <div className = {styles.card_body}>
          <h3 className = "card-title">24/7 Support</h3>
          <p className = "card-text">Friendly 24/ support</p>
         
        </div>
      </Card>
      <Card className = {styles.card} style={{ width: '10rem' }} data-aos = "fade-up">
        <FaCreditCard className = {styles.card_icon}/>
        <div className = {styles.card_body}>
          <h3 className = "card-title">Secure Payment</h3>
          <p className = "card-text">All cards accepted</p>
         
        </div>
      </Card>
      
       </div>
     </section>
      <Footer/>
    </div>
  )
}
