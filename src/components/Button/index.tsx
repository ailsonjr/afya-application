import React from 'react';

import { ButtonComponent } from './styles';
import { IProps } from './interfaces';

const Button: React.FC<IProps> = ({ children, onClick }) => {
    return (
        <ButtonComponent onClick={onClick}>
            {children}
        </ButtonComponent>
    )
}

export default Button;