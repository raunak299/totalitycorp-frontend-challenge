import React, {  } from 'react';
import Menu from '../Menu/Menu';
import styles from './Navigation.module.css'

function Navigation(props) {

    const searchbarTrigger = props.searchbarTrigger;

    // const searchClicked =props.searchClicked;

    const {isMenuOpen,setMenu,setCartTrigger,cartTrigger} =props;
          const openMenuHandler =()=>{
        setMenu(!props.isMenuOpen);
      }

      const cartHandler = ()=>{
        setCartTrigger(!cartTrigger);
      }

    return (

        <React.Fragment>
        <div className={styles['navigation-links']}>
             <i className="fa-solid fa-magnifying-glass" onClick={searchbarTrigger}></i> 
             <i className=" fa fa-solid fa-cart-shopping" onClick={cartHandler}></i> 
             {!isMenuOpen && <i className="fa-solid fa-bars" onClick={openMenuHandler}></i> }
             {isMenuOpen && <i className="fa-solid fa-xmark" onClick={openMenuHandler}></i> }
             {isMenuOpen && <Menu/>}
        </div>
        </React.Fragment>

    );
}

export default Navigation;