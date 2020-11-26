import React from 'react';
import Backdrop from '../backdrop/backdrop';
import Aux from '../../../hoc/Aux/Aux';
import classes from './modal.module.css';

const modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.clicked} />
      <div className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </Aux>
  )
}

export default modal;