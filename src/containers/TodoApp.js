import React from 'react';
import Adding from '../components/adding/adding';
import Items from '../components/items/items';
import Modal from '../components/ui/modal/modal';
import ConfigItem from '../components/configItem/configItem';
import Spinner from '../components/ui/spinner/spinner';
import Clock from '../components/clock/clock';
import axios from '../axios';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import classes from './TodoApp.module.css';

class TodoApp extends React.Component {
  state = {
    data: [],
    show: false,
    deleteShow: false,
    title: '',
    id: '',
    loading: false,
    save: false,
  };

  componentDidMount() {
    axios
      .get('tasks.json')
      .then((response) => {
        const updateData = response.data;
        this.setState({ data: updateData });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id && prevState.id !== this.state.id) {
      this.setState({ loading: true });
      axios
        .get(
          'tasks/' +
            this.state.id +
            '.json'
        )
        .then((response) => {
          this.setState({ title: response.data.task, loading: false });
        })
        .catch((err) => console.log(err));
    }
    if (this.state.save) {
      axios
        .get('tasks.json')
        .then((response) => {
          const updateData = response.data;
          this.setState({ data: updateData, save: false });
        })
        .catch((err) => console.log(err));
    }
  }

  showModalHandler = (id) => {
    this.setState({
      show: true,
      deleteShow: true,
      id: id,
    });
  };

  cancelModalHandler = () => {
    this.setState({ show: false });
  };

  titleChangeHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  addingModalHandler = () => {
    this.setState({ show: true, deleteShow: false, title: '', id: '' });
  };

  deleteHandler = () => {
    this.setState({ loading: true });
    axios
      .delete(
        'tasks/' + this.state.id + '.json'
      )
      .then((response) => {
        this.setState({ save: true, loading: false, show: false });
      })
      .catch((error) => console.log(error));
  };

  saveChangeHandler = () => {
    this.setState({ loading: true });
    const data = {
      task: this.state.title,
    };
    if (this.state.id === '') {
      axios
        .post('tasks.json', data)
        .then((response) => {
          this.setState({ save: true, loading: false, show: false });
        })
        .catch((error) => console.log(error));
    }
    if (this.state.id) {
      const updateTitle = { task: this.state.title };
      axios
        .put(
          'tasks/' +
            this.state.id +
            '.json',
          updateTitle
        )
        .then((response) => {
          if (response.status === 200) {
            this.setState({ save: true, loading: false, show: false });
          }
        })
        .catch((error) => console.log(error));
    }
  };

  render() {
    let configItem = <Spinner />;

    if (this.state.loading === false) {
      configItem = (
        <ConfigItem
          title={this.state.title}
          titleChangeHandler={this.titleChangeHandler}
          saveChangeHandler={this.saveChangeHandler}
          cancelHandler={this.cancelModalHandler}
          deleteShow={this.state.deleteShow}
          deleteHandler={this.deleteHandler}
        />
      );
    }

    return (
      <main>
        <Modal show={this.state.show} clicked={this.cancelModalHandler}>
          {configItem}
        </Modal>
        <header>
          <p className={classes.Heading}>Todo App</p>
          <Clock />
        </header>
        <Items clicked={this.showModalHandler} data={this.state.data} />
        <Adding clicked={this.addingModalHandler} />
      </main>
    );
  }
}

export default withErrorHandler(TodoApp, axios);
