import { initializeApp, getApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import React, { useState, useRef } from "react"
export const viewModel = () => {
    initializeApp({apiKey: ""})
    const auth = getAuth(getApp()) 
    const formRef = useRef(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const onPasswordRepeatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordRepeat(event.target.value)
    }

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if(password !== passwordRepeat){
            alert('Passwords doest not match')
            return
        }
        createUserWithEmailAndPassword(auth, email,password).then(credentials => {
            const user = credentials.user
            if(!user){
                alert('There was a problem')
                return
            } 
            updateProfile(user,{
                displayName: name
            }).then( () => {
                alert('Your account has been created')
                formRef.current.reset()
            }).catch(error => {
                alert(error.message)
            })
        }).catch(error => {
            alert(error.message)
        })
    }


    return {
        formRef,
        onNameChange,
        onEmailChange,
        onPasswordChange,
        onPasswordRepeatChange,
        onSubmit
    }
}