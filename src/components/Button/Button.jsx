import React from 'react';
import styles from './Button.module.css';

const Button = ({text, type= 'button'}) => {
    return (
        <button type={type} className={styles.button}>{text}</button>
    );
};

export default Button;