import React, {FC, useState} from 'react'

interface Prop {
    onSubmit: () => void
}

const BasicSubmit: FC<Prop> = (prop) => {
    return (
        <>
            <div className="field i-grouped">
                <div className="control">
                    <button className="button is-link" onClick={prop.onSubmit}>Submit</button>
                </div>
            </div>
        </>
    );
}

export default BasicSubmit
