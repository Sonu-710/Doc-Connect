import React, { useContext } from "react";
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/utils/validators';
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/UIElements/Button";
import './SignIn.css';
import { AuthContext } from "../../shared/context/auth-context";

const SignIn = () => {
    const auth = useContext(AuthContext);
    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false,
            },
            password: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to backend or process it further
        auth.login();
    };

    return (
        <div className="signin">
            <div className="signin__card">
                <h2>Sign In</h2>
                <form className="signin__form" onSubmit={authSubmitHandler}>
                    <Input
                        element='input'
                        id='email'
                        type='email'
                        label='E-mail'
                        validators={[VALIDATOR_EMAIL()]}
                        errorText='Please enter a valid email address'
                        onInput={inputHandler}
                    />
                    <Input
                        element='input'
                        id='password'
                        type='password'
                        label='Password'
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText='Please enter a valid password, at least 6 characters'
                        onInput={inputHandler}
                    />
                    <Button type='submit'>Sign In</Button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
