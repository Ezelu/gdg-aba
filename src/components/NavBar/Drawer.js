import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import styles from './NavBar.module.css';
import { CgMoreO } from 'react-icons/cg';







export default function Drawer () {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ol className={styles.drawer}>
        <a href="#"> <li> Home </li> </a> 
        <a href="#about"> <li> About </li> </a>
        <li> Events </li> 
        <a href="#talents"> <li> Talents </li> </a>
        <a href="#communityProjects"> <li>  Community projects </li> </a>
        <li className={styles.membership}> Become a member </li> 
      </ol>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)} className={styles.Button} size="large"> 
            <CgMoreO />
          </Button>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}






// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import styles from './NavBar.module.css';

// export default function Drawer () {
//   const [state, setState] = React.useState({
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <ol className={styles.drawer}>
//         <li> <a href="#about"> About </a> </li> 
//         <li> Events </li> 
//         <li> <a href="#talents"> Talents </a> </li> 
//         <li> <a href="#communityProjects"> Community projects </a> </li> 
//         <li className={styles.membership}> Become a member </li> 
//       </ol>
//     </Box>
//   );

//   return (
//     <div>
//       {['right'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <SwipeableDrawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             onOpen={toggleDrawer(anchor, true)}
//           >
//             {list(anchor)}
//           </SwipeableDrawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
