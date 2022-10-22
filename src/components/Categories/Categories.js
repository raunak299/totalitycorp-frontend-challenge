import React from 'react';
import styles from './Categories.module.css'

function Categories(){

  let categoriesData = [
        {image:'https://opensea.io/static/images/categories/art.png' , title:'Art'},
        {image:'https://opensea.io/static/images/categories/music.png' , title:'Music'},
        {image:'https://opensea.io/static/images/categories/trading-cards.png' , title:'Trading Cards'},
        {image:'https://opensea.io/static/images/categories/collectibles.png' , title:'Collectibles'},
        {image:'https://opensea.io/static/images/categories/photography-category.png' , title:'Photography'},
        {image:'https://opensea.io/static/images/categories/utility.png' , title:'Utility'},
        {image:'https://opensea.io/static/images/categories/domain-names.png' , title:'Domain Name'},
        {image:'https://opensea.io/static/images/categories/sports.png' , title:'Sports'},
  ]

  return(

        <div className={styles['categories-section']}>
      <h2>Browse by Category</h2>
      <div className={styles['categories-container']}>
        { categoriesData.map( (category)=> (
              <div className={styles['categories-card']} key={category.image}>
                    <img src={category.image} alt={category.title}></img>
                    <div>{category.title}</div>
              </div>
         ))}
      </div>
      </div>
  );

}

export default Categories;