import { TextInput } from '@mantine/core';
import React from 'react';

interface FormInputProps {
	label: string;
	name: string;
	type: string;
	placeholder: string;
	value: string;
	isRequired?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
	label,
	name,
	type,
	placeholder,
	value,
	isRequired,
	onChange,
}: FormInputProps) => {
	return (
		<TextInput
			label={label}
			name={name}
			type={type}
			placeholder={placeholder}
			value={value}
			required={isRequired}
			onChange={onChange}
		/>
	);
};

export default FormInput;
