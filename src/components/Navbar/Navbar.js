
import styles from './Navbar.module.css'
import Navigation from './Navigation';
import Logo from '../../images/opensea.svg'
import { useState} from 'react';


function Navbar(props) {

    const [searchClicked, setSearchClicked] = useState(false);
    const searchbarTrigger = ()=>{
     setSearchClicked(!searchClicked);
    }

   


    return (
        <div className={styles['navbar-center']}>
            
            {searchClicked && 
            <div className={styles['search-bar-wide']}>
               <i className="fa-solid fa-magnifying-glass"></i> 
               <input type="text" name="search-input-wide" className={styles['search-input']} placeholder='Search for items, account, collection' /> 
               <i className=" fa fa-solid fa-x" id={styles["cross-icon-1"]} onClick={searchbarTrigger}></i> 
            </div> }

        {(!searchClicked ) && 
        <div className={styles['navbar-small']}>
            {!searchClicked && <div className={styles['navbar-logo']}>
                <img src={Logo} alt='logo' />
                <h2>OpenSea</h2>
            </div> }

            <Navigation searchbarTrigger={searchbarTrigger} searchClicked={searchClicked}
             isMenuOpen={props.isMenuOpen} setMenu={props.setMenu} cartTrigger={props.cartTrigger} setCartTrigger={props.setCartTrigger}/>
        </div>}


        <div className={styles['navbar-wide']}>
             <div className={styles['navbar-logo']}>
                <img src={Logo} alt='logo' />
                <h2>OpenSea</h2>
            </div> 

            <div className={styles['search-bar']}>
               <i className="fa-solid fa-magnifying-glass" ></i> 
               <input type="text" name="search-input" className={styles['search-input']} placeholder='Search for items, account, collection' /> 
            </div>

            <Navigation searchbarTrigger={searchbarTrigger} searchClicked={searchClicked}
            isMenuOpen={props.isMenuOpen} setMenu={props.setMenu}  cartTrigger={props.cartTrigger} setCartTrigger={props.setCartTrigger}/>
        </div>

        </div>
     
    );
}

export default Navbar;