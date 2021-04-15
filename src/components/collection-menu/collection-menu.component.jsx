import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import styles from './collection-menu.module.css';

function CollectionMenu({countries}) {

  return (
    <article className={styles.collectionMenuContainer}>
      {
        countries
        .map((country,idx) => (
          <CollectionItem key={idx} {...country}/>
        ))
      }
    </article>
  )
}

export default CollectionMenu;