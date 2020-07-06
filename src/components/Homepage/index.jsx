import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import styles from './homepage.module.css';
import photo1 from '../../assets/img/photo1.png';
import photo2 from '../../assets/img/photo2.png';
import photo3 from '../../assets/img/photo3.png';
import photo4 from '../../assets/img/photo4.png';
import photo5 from '../../assets/img/photo5.png';

const Home = () => {
    return(
        <>
            <Navbar/>
            <div className={styles.Home}>
                <div className={styles.grid}>
                    <img className={styles.photo1} src={photo1} alt="icon"/>
                    <img className={styles.photo2} src={photo2} alt="icon"/>
                    <img className={styles.photo3} src={photo3} alt="icon"/>
                    <img className={styles.photo4} src={photo4} alt="icon"/>
                    <img className={styles.photo5} src={photo5} alt="icon"/>
                </div>
                <div className={styles.intro}>
                    <h1>Welcome to Richard's store</h1>
                    <p>From expectional in scale to more elegant and delicate in design/durable products. <br/> Our iphone collection offers products of timeless beauty.</p>
                </div>
                <Link to="/collection" className={styles.link}>See Collection</Link>
            </div>
        </>
    )
}

export default Home;