import React from 'react';

import styles from './errorMessage.module.scss';

type ErrorMessageProps = {
  message: string
};

const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <>
      {
        props.message
          ? <div className={styles.errorMessageContainer}
                 data-testid={'errorMessage'}>
            {props.message}
          </div>
          : null
      }
    </>
  );
};

export default ErrorMessage;