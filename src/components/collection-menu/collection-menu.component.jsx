import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import styles from './collection-menu.module.css';

function CollectionMenu({countries}) {

  return (
    <div className={styles.collectionMenuContainer}>
      {
        countries
        // .filter((_,idx)=> idx < 20)
        .map((country,idx) => (
          <CollectionItem key={idx} {...country}/>
        ))
      }
    </div>
  )
}

export default CollectionMenu;