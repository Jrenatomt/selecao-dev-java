import React from 'react';
import './styles.scss'

type Props = {
    text: string
}

const Button = ( { text }: Props ) => (
    <div>
    <button className="btn btn-outline-primary btn-admin border-radios-10">
        <h2>
            {text}
        </h2>
    </button>
</div>

);

export default Button;