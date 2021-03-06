import React from 'react';
import { Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

/**
 * @typedef ApiStatusProps
 * @property {Object} state the api response state
 * @property {function(): void} onClose Called when the alert is dismissed
 */

/**
 * @param {ApiStatusProps} props
 */
const ApiStatus = (props) => {
    const { t } = useTranslation();

    if (!props.state || props.state.loading) {
        return null;
    }

    let error;
    let index = 0;
    if (typeof props.state.message === 'object') {
        error = (
            <ul>
                {Object.values(props.state.message).map((message) => {
                    return <li key={index++}>{t(message)}</li>;
                })}
            </ul>
        );
    } else {
        error = t(props.state.message);
    }

    return (
        <Alert
            variant={props.state.success ? 'success' : 'danger'}
            dismissible
            onClose={props.onClose}
        >
            {error}
        </Alert>
    );
};

export default ApiStatus;
