import React from 'react';
import Button from '../ui/button/button';
import Aux from '../../hoc/Aux/Aux';
import classes from './configItem.module.css';

const configItem = (props) => {
  return (
    <Aux>
      <div className={classes.Text}>
        <div className={classes.Label}>
          <label>Tasks: </label>
        </div>
        <div className={classes.Textarea}>
          <textarea value={props.title} onChange={props.titleChangeHandler}></textarea>
        </div>
      </div>
      <div className={classes.Confirm}>
        <Button btnType='Success' clicked={props.saveChangeHandler}>Save</Button>
        <Button btnType='Danger' clicked={props.cancelHandler}>Cancel</Button>
        { props.deleteShow ? <Button btnType='Delete' clicked={props.deleteHandler}>Delete</Button> : null}
      </div>  
    </Aux>
  )
}

export default configItem;