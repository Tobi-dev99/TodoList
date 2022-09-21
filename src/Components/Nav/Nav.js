import React from 'react';
import classes from './Nav.module.css';

const Nav = (props) => {
 
     const setTab = (e) => {
       const selectedTab = e.target.innerHTML;
       switch (selectedTab) {
         case "Active Task":
           props.setActiveTab("Active");
           break;
         case "Completed Task":
           props.setActiveTab("Completed");
           break;
         case "All Task":
           props.setActiveTab("All");
           break;

         default:
           console.log("Wrong Choice");
           break;
       }
     };
  return (
    <nav className={classes.Nav}>
      <li className={props.activeTab === "Active" ? classes.active : ''} onClick={setTab}>
        Active Task
      </li>
      <li className={props.activeTab === "Completed" ? classes.active : ''} onClick={setTab}>
        Completed Task
      </li>
      <li className={props.activeTab === "All" ? classes.active : ''} onClick={setTab}>
        All Task
      </li>
    </nav>
  );
}

export default Nav