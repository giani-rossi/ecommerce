import React, { Fragment } from "react";
import { ToggleComponent } from "../ToggleComponent";

const WalletMessage = () => {
  const Modal = () => {
    return (
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Connect your wallet 💰</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={toggleModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Connect with one of our available wallet info providers or
                create a new one.
              </p>
            </div>
            <div className="modal-footer">
             
              <button type="button" className="btn btn-primary">
              MetaMask
              </button>
              <button type="button" className="btn btn-primary">
              Coinbase Wallet
              </button>
              <button type="button" className="btn btn-primary">
              WalletConnect
              </button>
             
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [modal, toggleModal] = ToggleComponent(<Modal />, true);

  return <Fragment>{modal}</Fragment>;
};

export default WalletMessage;


