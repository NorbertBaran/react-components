import {FC, useState} from "react";
import Header from "../account/Header";
import {Avatar, Button, Container, TextField} from "@mui/material";
import {Paper} from "../../index";

interface IData {
    name: string
    lastname: string
    email: string
}

interface IActions {
    avatar: () => any
    data: (name: string, lastname: string, email: string) => any
    password: (current: string, modified: string) => any
}

interface IRepeatError {
    value: boolean
    message?: string
}

interface IProfileErrors {
    name?: IRepeatError
    lastname?: IRepeatError
    email?: IRepeatError
    current?: IRepeatError
    modified?: IRepeatError
    repeat?: IRepeatError
}

interface IProfile {
    avatar: string
    data: IData
    actions: IActions
    errors?: IProfileErrors
}

const Profile: FC<IProfile> = ({avatar, data, actions, errors}) => {
    const [dataFields, setDataFields] = useState({
        name: data.name,
        lastname: data.lastname,
        email: data.email,
    })
    const [passwordFields, setPasswordFields] = useState({
        current: '',
        modified: '',
        confirm: ''
    })
    return (
        <Container maxWidth='lg'>
            <Paper>
                <Avatar src={avatar} onClick={() => actions.avatar()}
                        sx={{width: '160px', height: '160px', cursor: 'pointer', marginX: 'auto'}}/>
                <Header label='Personal data' variant='h4' sx={{marginTop: 2}}/>
                <TextField error={errors?.name?.value} label='Name' variant="outlined" value={dataFields.name}
                           onChange={(e) => setDataFields({...dataFields, name: e.target.value})}/>
                <TextField error={errors?.lastname?.value} label='Last name' variant="outlined"
                           value={dataFields.lastname}
                           onChange={(e) => setDataFields({...dataFields, lastname: e.target.value})}/>
                <TextField error={errors?.email?.value} label='Email' variant="outlined"
                           defaultValue={dataFields.email}
                           onChange={(e) => setDataFields({...dataFields, email: e.target.value})}/>
                <Button onClick={() => actions.data(dataFields.name, dataFields.lastname, dataFields.email)}
                        variant='contained' size='large'>Modify personal data</Button>
                <Header label='Password modification' variant='h4' sx={{marginTop: 2}}/>
                <TextField error={errors?.current?.value} label='Old password' variant="outlined"
                           type='password' value={passwordFields.current}
                           onChange={(e) => setPasswordFields({...passwordFields, current: e.target.value})}/>
                <TextField error={errors?.modified?.value || passwordFields.current !== passwordFields.confirm}
                           label='New password' variant="outlined" type='password'
                           value={passwordFields.modified}
                           onChange={(e) => setPasswordFields({...passwordFields, modified: e.target.value})}/>
                <TextField error={errors?.current?.value || passwordFields.modified !== passwordFields.confirm}
                           label='Confirm new password' variant="outlined" type='password'
                           value={passwordFields.confirm}
                           onChange={(e) => setPasswordFields({...passwordFields, confirm: e.target.value})}/>
                <Button
                    onClick={() => passwordFields.current == passwordFields.confirm ? actions.password(passwordFields.current, passwordFields.modified) : () => {
                    }} variant='contained' size='large'>Change password</Button>
            </Paper>
        </Container>
    )
}

export default Profile