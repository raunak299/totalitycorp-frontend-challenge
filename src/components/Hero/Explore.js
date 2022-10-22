import styles from './Explore.module.css';
import { useState } from 'react';

function Explore(props){

    const exploreData = [{image:'https://i.seadn.io/gcs/files/0b9bf356e4e472f4b3e4a25612312c1c.jpg?auto=format&w=384' , title:'Streets by esraeslen'},
                          {image:'https://i.seadn.io/gae/YMrHbC7LU59e4ELZafsXdK0i9zfgv91xv1bMwJcHYZOXpA2OGzRu3DxdDvR2RCQ7P2rg4jGAgkReLqK91WhVLnVbY8Z5d9IJjG9XYA?auto=format&w=384',title:'The Ladies',floor:'0.5ETH'},
                         {image:'https://i.seadn.io/gae/j4VeIFKvDqI5vPdzUNGoYKL5AGdAsmd-WeF5NonuhMSiUl2GxDgIJ29EPHwDaaqq2g3PQ6aWjo5pihIu00b9VVIrJznXjGue9dy7lQ?auto=format&w=750',title:'LofiLofts',floor:'0.6ETH'},
                         {image:'https://i.seadn.io/gae/xxMHP89O1LbtfOWuzO6mE9OyohSCSsryw35N21Bmmro2CRd2vn3_kxE37Pp_qT0_0L7U3Yp-Ij59S_k-dLbSjo6Tp2QjZzwQff1a?auto=format&w=384',title:'The Chainsmokers - So Far So Good',floor:'0.7ETH'},
                         {image:'https://i.seadn.io/gae/G2l4wmJGtUwjVm3zXtGtr-3Yt_krjqiCrGVa2UTjtH8cYLqfPNEMBsnoI5psuTgC0OJ2wfVA5-9nywF8nc--OoBryeIZClXKQ8fKFA?auto=format&w=750',title:'Primates',floor:'0.5ETH'},
                         {image:'https://i.seadn.io/gae/0_dZ0G_qSn6BPzyeqyTHiB6bmZ7VgPNoEHNgxYYUkTEHT__9-W9udr1zOTkwFrzCpwbcKSUOlFbctZGj1vYi3UvyBZP_Jh83Pso1iQ?auto=format&w=1000',title:'Archangel',floor:'0.4ETH'},
                         {image:'https://i.seadn.io/gae/ftBpdHTmgfoXTl5ibWf9wMlDLwKpHpQqGwxLbG2i1E5NWv7F9hgUK64UMcGBfD0QfOcLW7_aBzkf30oxzluNS1owa5q4rQDz-DWlaUI?auto=format&w=1000',title:'hsky',floor:'0.6ETH'},
                         {image:'https://i.seadn.io/gae/Cy14vWLj7MBQko6T_KcVL0fKdRqNHNqlAkA4Vg0UGD4tt7PC5JaBvF23X9iRIkd7R8SLNZ5piDJZrwNbdYBqlN904gHTL4yPQ6Nzc28?auto=format&w=750',title:'E4C Rangers Ultimate Edition',floor:'0.5ETH'},
                        ]



            //  let arr = ['hellow','I','am','Raunak','raj'];
             const [newArr,setNewArr] = useState(exploreData);
            //  console.log(newArr);
    
      const nextHandler =()=>{
        let temp = newArr[newArr.length-1]
          newArr.unshift(temp);
          newArr.pop();
          setNewArr(newArr.slice(0));
         }

          const prevHandler = ()=>{
           newArr.push(newArr[0]);
            newArr.shift();
           setNewArr(newArr.slice(0));
         }

        

    return(
        <div className={styles['explore-sec']}>
              <button onClick={nextHandler}><i className="fa-solid fa-less-than" onClick={nextHandler}></i></button>
              <button onClick={prevHandler}><i className="fa-solid fa-greater-than" onClick={prevHandler}></i></button>
        {newArr.slice(0,props.noOfSlides).map((explore)=>(
             <div className={styles['explore-card']} key={explore.title}>
                <img src={explore.image}  className={styles['explore-card']} alt='img' loading='lazy'>
                </img>
                <div>{explore.title}</div>
             </div> 

        ))}
     </div>
    );
}

export default Explore;