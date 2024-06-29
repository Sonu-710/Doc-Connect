// Auth.js
import React from "react";
import Input from '../../shared/components/FormElements/Input';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
} from '../../shared/utils/validators';
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/UIElements/Button";
import './Auth.css';

const Auth = () => {
    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false,
            },
            password: {
                value: '',
                isValid: false,
            }
        },
        false
    );

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to backend or process it further
    };

    return (
        <div className="auth">
            <div className="auth-card">
                <h2>LOGIN</h2>
                <form onSubmit={authSubmitHandler}>
                    <Input
                        element='input'
                        id='email'
                        type='email'
                        label='E-mail'
                        validators={[VALIDATOR_EMAIL]}
                        errorText='Please enter a valid email address'
                        onInput={inputHandler}
                    />
                    <Input
                        element='input'
                        id='password'
                        type='password'
                        label='Password'
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        errorText='Please enter a valid password'
                        onInput={inputHandler}
                    />
                    <Button type='submit' disabled={!formState.isValid}>Login</Button>
                </form>
            </div>
        </div>
    );
};

export default Auth;
