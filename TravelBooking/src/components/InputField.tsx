import React from 'react';

interface InputFieldProps {
    label: string;
    id: string;
    name: string;
    type: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, name, type, value, onChange }) => {
    return (
        <label htmlFor={id}>
        {label}:
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

export default InputField;