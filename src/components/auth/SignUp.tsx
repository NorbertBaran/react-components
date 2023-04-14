import {Button, Container, TextField, Typography} from "@mui/material";
import {FC, useState} from "react";
import Route from './Route'
import {IHeader} from "../account/Header";
import {Header, Paper} from "../../index";

interface IActions {
    signup: (name: string, lastName: string, email: string, password: string) => any
    google: () => any
    signin: () => any
}

interface ISignUpError {
    value: boolean
    message?: string
}

interface ISignUpErrors {
    name?: ISignUpError
    lastname?: ISignUpError
    email?: ISignUpError
    password?: ISignUpError
    repeat?: ISignUpError
}

interface ISignUp {
    title: IHeader
    actions: IActions
    errors?: ISignUpErrors
}

const SignUp: FC<ISignUp> = ({title, actions, errors}) => {
    const [nameForm, setNameForm] = useState('')
    const [lastnameForm, setLastnameForm] = useState('')
    const [emailForm, setEmailForm] = useState('')
    const [passwordForm, setPasswordForm] = useState('')
    const [passwordRepeatForm, setPasswordRepeatForm] = useState('')
    return (
        <Container maxWidth='sm'>
            <Header label='React' accent='Components' variant='h4' align='center' sx={{marginBottom: 4}}/>
            <Paper>
                <Header label='Sign' accent='Up' variant='h5' align='center' sx={{marginBottom: 3}}/>
                <TextField error={errors?.name?.value} variant="outlined" label='Name' value={nameForm}
                           onChange={(e) => setNameForm(e.target.value)}/>
                <TextField error={errors?.lastname?.value} variant="outlined" label='Last name' value={nameForm}
                           onChange={(e) => setLastnameForm(e.target.value)}/>
                <TextField error={errors?.email?.value} variant="outlined" label='Email' value={emailForm}
                           onChange={(e) => setEmailForm(e.target.value)}/>
                <TextField error={errors?.password?.value} variant="outlined" label='Password' type='password'
                           value={passwordForm} onChange={(e) => setPasswordForm(e.target.value)}/>
                <TextField error={errors?.repeat?.value} variant="outlined" label='Password repeat' type='password'
                           value={passwordRepeatForm} onChange={(e) => setPasswordRepeatForm(e.target.value)}/>
                <Button variant='contained' size='large'
                        onClick={() => actions.signup(nameForm, lastnameForm, emailForm, passwordForm)}>Sign
                    Up</Button>
                <Typography align='center'>
                    <>Do you have account? </>
                    <Route onClick={() => actions.signin()}>Sign in</Route>
                </Typography>
            </Paper>
        </Container>
    )
}

export default SignUp