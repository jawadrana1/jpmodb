import React from 'react';
import styles from './mainNavbar.module.css'; // CSS Module import

import { FaShoppingCart } from "react-icons/fa";
const MainNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a className={styles.logo} href="#">Daraz</a>

        
      </div>
      <form className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search..."
          />
          <button className={styles.searchButton}>Search</button>
          
        </form>

       
       
    </nav>
  );
};

export default MainNavbar;



