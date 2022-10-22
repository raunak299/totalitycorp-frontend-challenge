import { useState } from 'react';
import styles from './Menu.module.css';

function Menu(){

  const menuList = [{title:'Explore', Content:['Explore All','Solana NFTs','Art','Collectibles', 'Domain Name','Music']},
  {title:'Stats', Content:['Rankings', 'Activity']},
  {title:'Resources', Content:['Partner','Taxes','Block','Docs', 'Help Center']},
  {title:'Language', Content:['English','French','German','Hindi','Italic']},
]

   const [menuDetailTrigger, setMenuDetailTrigger] = useState('');
   const [menuTrigger,setMenuTrigger] = useState(false);

  const menuHandler = (e)=>{
   let index = menuList.findIndex((menu)=>(
         menu.title === e.target.value
    ));
    setMenuDetailTrigger(menuList[index].Content);
    setMenuTrigger(!menuTrigger);
  }

  const resetMenuHandler = ()=>{
    setMenuTrigger(!menuTrigger);
  }

  return( <div className={styles['menu-section']}>
    {/* <div>233</div> */}
           { !menuTrigger && menuList.map((menu)=>(
              <button className={styles['menu-card']} key={menu.title} value={menu.title} onClick={menuHandler}>
                 <button value={menu.title} onClick={menuHandler}>{menu.title}</button>
                 <button value={menu.title} onClick={menuHandler}>{'>'}</button>
              </button>
           ))}

           { menuTrigger && 
           <div>
            <div className={styles['reset-menu']}>
           <button  onClick={resetMenuHandler}>{'<  Explore'}</button>
           </div>
           {menuDetailTrigger.map((menu)=>(
                <div className={styles['menu-card']} key={menu}>
                <div>{menu}</div>
             </div>
           ))}
           </div>}


    </div>);
}

export default Menu;