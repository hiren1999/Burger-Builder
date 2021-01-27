import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxs from "../Auxs/Auxs";
import useHttpErrorHandler from "../../hooks/http-error-handler";

const withErrorHandler = (WrappedComponent, axios) => {
    return (props) => {
        const [error, clearError] = useHttpErrorHandler(axios);
        return (
            <Auxs>
                <Modal show={error} modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Auxs>
        );
    };
};

export default withErrorHandler;
