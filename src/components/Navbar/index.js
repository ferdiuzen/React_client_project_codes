import React from 'react';
import{Link} from "react-router-dom";
import styles from "./styles.module.css";
function Navbar() {
  return (
    <nav className={styles.nav}>
        <div className={styles.left}> 
          <div className={styles.logo}>
            <Link to="/">eCommerceProject</Link>
          </div>
        
          <div className={styles.menu}>
          <Link to="/">Products</Link>
          </div>

        
        </div>


        <div className={styles.right}> 
        
          
           <Link to="/">Card</Link>
         
        
        
        </div>

    </nav>


  );
}

export default Navbar;