import React, {useState} from 'react';
import {useSetRecoilState} from "recoil";
import {AuthUser, getMe, login, LoginRequest} from "../../services/auth/authService"; // Import your Login-specific CSS
import {isAuthenticatedState, userState} from '../../recoil/userAtoms';
import {useNavigate} from 'react-router-dom';
import {Button, Form, Input, Typography} from "antd";

const {Title} = Typography;

const Login: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const setAuthUser = useSetRecoilState(userState);
    const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
    setAuthUser(null)
    setIsAuthenticated(false)

    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        try {
            const loginRequest: LoginRequest = {
                userId: username,
                pwd: password
            }
            await login(loginRequest);

            const authUser: AuthUser = await getMe();
            setAuthUser(authUser);
            setIsAuthenticated(true)
            navigate('/home');
        } catch (error) {
            setIsAuthenticated(false)
        }
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
            <Form
                layout="vertical"
                initialValues={{layout: "vertical"}}
                style={{maxWidth: 600, width: '20%'}}
                onFinish={handleSubmit}
            >
                <Form.Item label="User Id">
                    <Input placeholder="input id" onChange={handleUsernameChange} required/>
                </Form.Item>
                <Form.Item label="Password">
                    <Input placeholder="input password" type={"password"} onChange={handlePasswordChange} required/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType={"submit"} block>Login</Button>

                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
