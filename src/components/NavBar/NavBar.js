import * as React from 'react';
import GDG_LOGO from '../../assets/icons/Frame 6.png';
import Drawer from './Drawer';
import styles from './NavBar.module.css';



export default function NavBar () {
  return (
    <nav className={styles.container}>
      <aside className={styles.logo}>
        <a href="#"> <img src={GDG_LOGO} alt="GDG Aba Logo" /> </a>
      </aside>
      <aside className={styles.navigation}>
        <ol>
          <li> <a href="#about"> About </a> </li> 
          <li> Events </li> 
          <li> <a href="#talents"> Talents </a> </li> 
          <li> <a href="#communityProjects"> Community projects </a> </li> 
          <li className={styles.membership}> Become a member </li> 
        </ol>
      </aside>
      <aside className={styles.drawer}>
        <Drawer />
      </aside>
    </nav>
  )
}












// import * as React from 'react';
// import GDG_LOGO from '../../assets/icons/Frame 6.png';
// import styles from './NavBar.module.css';



// export default function NavBar () {
//   return (
//     <nav className={styles.container}>
//       <aside className={styles.logo}>
//         <a href="#"> <img src={GDG_LOGO} alt="GDG Aba Logo" /> </a>
//       </aside>
//       <aside className={styles.navigation}>
//         <ol>
//           <li> <a href="#about"> About </a> </li> 
//           <li> Events </li> 
//           <li> <a href="#talents"> Talents </a> </li> 
//           <li> <a href="#communityProjects"> Community projects </a> </li> 
//           <li className={styles.membership}> Become a member </li> 
//         </ol>
//       </aside>
//     </nav>
//   )
// }
