import styles from './Trending.module.css'

function Trending(){
   const trendingData = [
    {position:'1',image:'https://i.seadn.io/gae/Z-nRb-pGB9o4BpaOgYXYi_3HtBF2GYj0ZoUF4fE7tGuoxGZzVvdXmTNyzWZNJ1kjtetqgjP6oi15N90jas_ph-sHwyV3tlKklrAZ?auto=format&w=384',title:'Dogenheim', floor:'.5ETH', volume:'368ETH'},
    {position:'2',image:'https://i.seadn.io/gcs/files/87324cac3c2fa118b609014d0e5a1692.png?auto=format&w=384',title:'Non NFT', floor:'.1ETH', volume:'215ETH'},
    {position:'3',image:'https://i.seadn.io/gcs/files/e3d12b7b71c75a02256f9d34fe35824e.gif?auto=format&w=384',title:'Gangster All Star Evolution', floor:'.3ETH', volume:'146ETH'},
    {position:'4',image:'https://i.seadn.io/gcs/files/26c3a14f0f9f2cbe6080d932a09870d0.png?auto=format&w=384',title:'Nyolings', floor:'.7ETH', volume:'170ETH'},
    {position:'5',image:'https://i.seadn.io/gae/t-tH-MZag-dNIxZ5cEnJrV7FZiefBytfOmARSVubR4me-fV0PE8N0BeCLeMVyN8oDNcOiKxTHRDOyk9oV1ZUef-IkaDQqYZX4aPV?auto=format&w=384',title:'Navatar', floor:'.9ETH', volume:'352ETH'}
   ]

   return(
    <div className={styles['trending-sec']}>
        <h2>Trending</h2>
        <div className={styles['title-row']}>
            <h4>Collection</h4>
            <h4>Volume</h4>
        </div>
       {trendingData.map((trending)=>(
           <div className={styles['trending-card']} key={trending.position}>
             <div className={styles['trending-collection']}>
                    <div className={styles['position']}>
                      {trending.position}
                    </div>
                    <div>
                   <img src={trending.image} alt='img' loading='lazy'/>     
                    </div>
                   <div className={styles['trending-details']}>
                       <div>{trending.title}</div>
                       <div>{`Floor:${trending.floor}`}</div>
                   </div>
            </div>
                   <div className={styles['trending-volume']}>
                       {trending.volume}
                   </div>
            </div>
       ))}
       
    </div>
   );

}

export default Trending;