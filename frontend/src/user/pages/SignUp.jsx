// Auth.js
import React, { useState, useContext } from "react";
import Input from '../../shared/components/FormElements/Input';
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
} from '../../shared/utils/validators';
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/UIElements/Button";
import './SignUp.css';
import { AuthContext } from "../../shared/context/auth-context";

const SignUp = () => {
    const auth = useContext(AuthContext);
    const [isPatient, setIsPatient] = useState(true);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const [formState, inputHandler, setFormData] = useForm(
        {
            name: {
                value: '',
                isValid: false,
            },
            email: {
                value: '',
                isValid: false,
            },
            password: {
                value: '',
                isValid: false,
            },
            passwordConfirm: {
                value: '',
                isValid: false,
            },
            qualification: {
                value: '',
                isValid: false,
            },
            speciality: {
                value: '',
                isValid: false,
            },
            phone: {
                value: '',
                isValid: false,
            },
            photoUrl: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const switchModeHandler = () => {
        if (isPatient) {
            setFormData(
                {
                    ...formState.inputs,
                    qualification: undefined,
                    speciality: undefined,
                },
                formState.inputs.name.isValid &&
                formState.inputs.email.isValid &&
                formState.inputs.password.isValid &&
                formState.inputs.passwordConfirm.isValid &&
                formState.inputs.phone.isValid &&
                formState.inputs.photoUrl.isValid
            );
        } else {
            setFormData({
                ...formState.inputs,
                qualification: {
                    value: '',
                    isValid: false,
                },
                speciality: {
                    value: '',
                    isValid: false,
                },
            }, formState.inputs.email.isValid &&
            formState.inputs.password.isValid &&
            formState.inputs.passwordConfirm.isValid &&
            formState.inputs.phone.isValid &&
            formState.inputs.photoUrl.isValid);
        }

        setIsPatient(prevMode => {
            // console.log(formState.isValid);
            return !prevMode
        });
    };

    const authSubmitHandler = async event => {
        event.preventDefault();

        //Signup API
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:3000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formState.inputs.name.value,
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value,
                    passwordConfirm: formState.inputs.passwordConfirm.value,
                    qualification: formState.inputs.qualification.value,
                    speciality: formState.inputs.speciality.value,
                    phone: formState.inputs.phone.value,
                    photoUrl: formState.inputs.photoUrl.value,
                })
            });
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message);
            }
            console.log(responseData);
            setIsLoading(false);
            auth.login();
        }
        catch (err) {
            console.log(err);
            setIsLoading(false);
            setError(err.message || 'Something went wrong, please try again.');

        }

        setIsLoading(false);

    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            <ErrorModal error={error} onClear={errorHandler} />
            <div className="auth">
                {isLoading && <LoadingSpinner asOverlay />}
                <div className="auth-card">
                    <h2>Sign Up</h2>
                    <Button inverse onClick={switchModeHandler}>SWITCH TO {!isPatient ? `PATIENT` : `DOCTOR`}</Button>
                    <form onSubmit={authSubmitHandler}>
                        <Input
                            element='input'
                            id='name'
                            type='text'
                            label='Name'
                            validators={[]}
                            errorText='Please enter a valid name'
                            onInput={inputHandler}
                        />
                        <Input
                            element='input'
                            id='email'
                            type='email'
                            label='E-mail'
                            validators={[]}
                            errorText='Please enter a valid email address'
                            onInput={inputHandler}
                        />
                        <Input
                            element='input'
                            id='password'
                            type='password'
                            label='Password'
                            validators={[]}
                            errorText='Please enter a valid password'
                            onInput={inputHandler}
                        />
                        <Input
                            element='input'
                            id='passwordConfirm'
                            type='password'
                            label='Confirm password'
                            validators={[]}
                            errorText='Please enter the same password'
                            onInput={inputHandler}
                        />
                        {!isPatient &&
                            <>
                                <Input
                                    element='input'
                                    id='qualification'
                                    type='text'
                                    label='Qualification'
                                    validators={[]}
                                    errorText='Please enter a valid qualification'
                                    onInput={inputHandler}
                                />
                                <Input
                                    element='input'
                                    id='speciality'
                                    type='text'
                                    label='Speciality'
                                    validators={[]}
                                    errorText='Please enter a valid speciality'
                                    onInput={inputHandler}
                                />
                            </>
                        }
                        <Input
                            element='input'
                            id='phone'
                            type='text'
                            label='Phone No'
                            validators={[]}
                            errorText='Please enter a phone number'
                            onInput={inputHandler}
                        />
                        <Input
                            element='input'
                            id='photoUrl'
                            type='text'
                            label='Photo'
                            validators={[]}
                            errorText='Please enter a URL'
                            onInput={inputHandler}
                        />
                        <Button type='submit'>Sign Up</Button>
                    </form>
                </div>
            </div>
        </>);
};

export default SignUp;
