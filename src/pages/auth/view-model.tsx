import {ChangeEvent,  useEffect,  useState} from 'react'
import { useNavigate } from 'react-router-dom'
import emailValidator from 'email-validator'
import {User} from '../../models/user'

export const SignUpViewModel = () => {
    const user: User = new User()
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        user.validate()
        .then(resp => {
            if(resp === true){
                navigate('/dashboard')
            }
        })
    },[])

    const validateEmail = (email: String):Boolean => {
        return emailValidator.validate(email.toString())
    }

    const validateInputs = ():Boolean => {
        if(firstName.length == 0){
            setError('First name is required')
            return false
        }
        if(lastName.length == 0){
            setError('Last name is required')
            return false
        }
        if(email.length == 0){
            setError('Email is required')
            return false
        }
        if(password.length == 0){
            setError('Password is required')
            return false
        }
        if(!validateEmail(email)){
            setError('Not a valid email')
            return false
        }
        if(repeatPassword.length == 0){
            setError('Repeat password is required')
            return false
        }
        if(password != repeatPassword){
            setError('Passwords don\'t match')
            return false
        }
        if(password.length < 8){
            setError('Password too short, minimun 8 characters')
            return false
        }
        setError('')
        return true
    }

    const signup = () => {
        if(!validateInputs()) return
        setLoading(true)
        user.signUp(firstName,lastName,email,password)
            .then(resp => {
                if (resp === true){
                    navigate('/dashboard')
                }
            })
            .catch(message => setError(message))
            .finally( () => {
                setLoading(false)
            })

    }

    const updateFirstName = (e:ChangeEvent<HTMLInputElement>) => {
        setError('')
        setFirstName(e.target.value.trim())
    }
    const updateLastName = (e:ChangeEvent<HTMLInputElement>) => {
        setError('')
        setLastName(e.target.value.trim())
    }
    const updateEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setError('')
        setEmail(e.target.value.trim())
    }
    const updatePassword = (e:ChangeEvent<HTMLInputElement>) => {
        setError('')
        setPassword(e.target.value.trim())
    }
    const updateRepeatPassword = (e:ChangeEvent<HTMLInputElement>) => {
        setError('')
        setRepeatPassword(e.target.value.trim())
    }

    return {
        loading,
        error,
        updateFirstName,
        updateLastName,
        updateEmail,
        updatePassword,
        updateRepeatPassword,
        signup
    }
}

export const LoginViewModel = () => {
    const user: User = new User()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        user.validate()
        .then(resp => {
            if(resp === true){
                navigate('/dashboard')
            }
        })
    },[])

    const validateEmail = (email: String):Boolean => {
        return emailValidator.validate(email.toString())
    }

    const validateInputs = ():Boolean => {
        if(email.length == 0){
            setError('Email is required')
            return false
        }
        if(password.length == 0){
            setError('Password is required')
            return false
        }
        if(!validateEmail(email)){
            setError('Not a valid email')
            return false
        }
        setError('')
        return true
    }
   
    const login = () => {
        if(!validateInputs()) return
        setLoading(true)
        user.login(email,password)
            .then(resp => {
                if(resp === true){
                    navigate('/dashboard')
                }
            })
            .catch(message => setError(message))
            .finally( () => {
                setLoading(false)
            })
    }

    const updateEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setError('')
        setEmail(e.target.value.trim())
    }
    const updatePassword = (e:ChangeEvent<HTMLInputElement>) => {
        setError('')
        setPassword(e.target.value.trim())
    }

    return {
        loading,
        error,
        updateEmail,
        updatePassword,
        login
   }
}

export const ForgotViewModel = () => {

    const user: User = new User()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        user.validate()
        .then(resp => {
            if(resp === true){
                navigate('/dashboard')
            }
        })
    },[])


    const validateEmail = (email: String):Boolean => {
        return emailValidator.validate(email.toString())
    }

    const validateInputs = ():Boolean => {
        if(email.length == 0){
            setError('Email is required')
            return false
        }
        if(!validateEmail(email)){
            setError('Not a valid email')
            return false
        }
        return true
    }


    const recover = () => {
        if(!validateInputs()) return
        setLoading(true)
        user.recoverPassword(email)
            .then(resp => {
                if(resp === true){
                    setEmail('')
                    setSuccess('Done! Check your email...')
                }
            })
            .catch(message => {
                setError(message)
            })
            .finally( () => {
                setLoading(false)
            })
    }

    const updateEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setError('')
        setSuccess('')
        setEmail(e.target.value.trim())
    }

    return {
        loading,
        error,
        success,
        updateEmail,
        recover
   }
}
