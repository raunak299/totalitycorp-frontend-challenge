
import styles from './Hero.module.css';
import Explore from "./Explore";

function Hero(props){

   

   return(
       <div className={styles['hero-sec']}>
         
            <h1>Explore, collect, and sell NFTs</h1>
            <div className={styles['explore-sec-wide']}>
              <Explore noOfSlides={4}/>
            </div>

            <div className={styles['explore-sec-small']}>
            <Explore noOfSlides={3}/>
            </div>


            <div className={styles['explore-sec-extra-small']}>
            <Explore noOfSlides={2}/>
            </div>

            <div className={styles['explore-sec-extra-extra-small']}>
            <Explore noOfSlides={1}/>
            </div>
          
       </div>
   );
}

export default Hero;