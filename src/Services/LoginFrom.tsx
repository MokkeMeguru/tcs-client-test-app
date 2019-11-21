import React, {FC, useState} from 'react'
import BasicInput from './Utils/BasicInput'
import BasicSubmit from './Utils/BasicSubmit'

interface ILogin {
    email: string;
    password: string;
}

type onChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
type onAdd = (event: React.FormEvent<HTMLFormElement>) => void;

const LoginForm: FC<{}> = () => {

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setLogin(() => {return {...login, [e.target.name]: e.target.value}});
    }

    const onSubmit = () => {
        const params = new URLSearchParams();
        const requestbody = {email: 'e.tmailbank@gmail.com',
                       password:'TestPass01'}
        fetch('http://localhost:3000/tcs/login',
              {method: 'POST',
               mode : 'cors',
               headers: {
                    "Content-Type": "application/json; charset=utf-8",
               },
               body: JSON.stringify(requestbody)} )
            .then(response => response.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(err => console.log(err));
        console.log(login);
    }

    const [login, setLogin] = useState({email : '', password: ''});

    return (
        <>
            <div className="container">
                <div className="form">
                    <nav className="level">
                        <p className="title">User Login</p>
                    </nav>
                    <BasicInput name="email" value={login.email} onChange={onInputChange} />
                    <BasicInput name="password" value={login.password} onChange={onInputChange} />
                    <BasicSubmit onSubmit={onSubmit} />
                </div>
            </div>
        </>
    );
};

export default LoginForm;
