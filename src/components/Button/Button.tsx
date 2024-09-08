import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary'; // Tipos de variação
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
    return (
        <button className={`${styles.button} ${styles[variant!]}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
