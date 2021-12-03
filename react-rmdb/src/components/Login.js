import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';

// Components
import Button from './Button';

// Styles
import {Wrapper, Content} from './Login.styles';

// Context
import {Context} from '../context';

const Login = ()=>{

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();


    const handleSubmit = async() => {
        setError(false);
        try{
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(requestToken,userName,password);
            setUser({sessionId: sessionId.session_id, userName});
        
            console.log(sessionId);
            
            navigate('/');

        }catch(error){
            setError(true);
        }
    };
    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name==='username') setUserName(value);
        if(name==='password') setPassword(value);
    };

    return(
        <Wrapper>
            <Content>
                {error && <div className='error'>There was an error!</div>}
                <label>Username:</label>
                <input
                    type='text'
                    value={userName}
                    name = 'username'
                    onChange={handleInput}
                    autoComplete='off'
                />
                <input
                    type='password'
                    value={password}
                    name = 'password'
                    onChange={handleInput}
                    autoComplete='off'
                />
                <Button text='Login' callback={handleSubmit}/>
            </Content>
        </Wrapper>
    )
}

export default Login;