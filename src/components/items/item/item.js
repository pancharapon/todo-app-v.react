import React from 'react';
import classes from './item.module.css'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

const item = (props) => {
  return (
    <div className={classes.item}>
      <div>{`${props.name}`}</div>
      <div>
        <SettingsApplicationsIcon 
            style={{color: '#1769aa', fontSize: 40}} 
            className={classes.setting}
            onClick={props.modalSetting} />
      </div>
    </div>
  )
}

export default item;