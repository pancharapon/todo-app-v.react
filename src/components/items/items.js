import React from 'react';
import Item from './item/item';
import Spinner from '../ui/spinner/spinner';
import classes from './items.module.css';

class Items extends React.Component {

  

  render() {
    let items = <div className={classes.Loading}><Spinner /></div>;
    if (Object.entries(this.props.data).length !== 0) {
      items = Object.entries(this.props.data).map((item) => {
        return (
          <Item
            name={item[1].task}
            modalSetting={() => this.props.clicked(item[0])}
            key={item[0]}
          />
        );
      });
    }

    return <div className={classes.Items}>{items}</div>;
  }
}

export default Items;
