import React, { FC } from 'react';

interface Props {
    name: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const BasicInput: FC<Props> = props => {
    const { name, value, onChange} = props;
    return (
        <>
            <label className="label">{name}</label>
            <div className="control">
                <input className="input" type="text" name={name} value={value} onChange={onChange} />
            </div>
        </>
    );
}

export default BasicInput
