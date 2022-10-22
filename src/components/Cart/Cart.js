import styles from './Cart.module.css';

function Cart(props){


    const cartHandler = ()=>{
        console.log()
        props.setCartTrigger(!props.cartTrigger);
      }
   
    return( 
          
        <div className={styles['cart-section']}>
              <div className={styles['cart-header']}>
                <div>Your Cart</div>
                 <i className="fa-solid fa-xmark" onClick={cartHandler}/>
              </div>
              <div>Your Cart is Empty</div>
       </div>
        
      
  
    );      
  
  
  }
  
  export default Cart;