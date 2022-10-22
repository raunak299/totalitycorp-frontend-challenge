import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles['footer-section']}>
             <h2>Stay in the Loop</h2>
             <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
             <div className={styles['email']}>
             <input type='text' placeholder='Your Email Address' ></input>
             <button>Sign Up</button>
             </div>
        </div>
    )
}

export default Footer;