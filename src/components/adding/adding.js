import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import classes from './adding.module.css';

const adding = (props) => {
  return (
  <div className={classes.Adding} onClick={props.clicked}>
    <AddIcon className={classes.Icon} fontSize='large'/>
    <span className={classes.Text}>Add a task due today</span>
  </div>
  )
}

export default adding;