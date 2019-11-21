import React, {FC, useState} from 'react'

const Header: FC<{}> = () => {
    return (
        <>
            <nav className="bd-navbar navbar has-shadow is-spaced">
                <div className="container">
                    <div className="navbar-brand">
                        <div className="column">
                            <h1 className="title">Task Cabinet Client</h1>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
