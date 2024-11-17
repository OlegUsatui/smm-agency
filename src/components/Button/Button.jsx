import React from 'react';
import styles from './Button.module.css';

const Button = ({text, type= 'button', onClick}) => {
    return (
        <button type={type} className={styles.button} onClick={onClick}>{text}</button>
    );
};

export default Button;