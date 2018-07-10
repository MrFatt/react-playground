import React, { PureComponent } from "react";
import Modal from "./Modal";
import "./index.css";

export default class Portals extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      showModal: false
    };
  }

  handleOnClick = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  render() {
    const modal = this.state.showModal ? <Modal>
        <div className="modal">
          <button onClick={this.handleOnClick}>Hide modal</button>
        </div>
      </Modal> : null;
    return (
      <div>
        <h3>Portals: </h3>
        <button onClick={this.handleOnClick}>Show Modal</button>
        {modal}
      </div>
    );
  }
}
