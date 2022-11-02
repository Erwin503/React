import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open dialog window
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Creative dialog window</h1>
              <p>I'm awesome</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close dialog window
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
