import React from 'react';
import Modal from '../../components/ui/modal/modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    constructor() {
      super()
      this.state = {
        error: false,
      };
      axios.interceptors.request.use(
        (req) => req,
        (error) => {
          this.setState({ error: null });
        }
      );
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
