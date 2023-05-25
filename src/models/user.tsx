export class User{
    private baseUrl = "https://desking-time-api-v1-dev.herokuapp.com/"
    private id:String = ''
    private first_name:String = ''
    private last_name:String = ''
    private email:String = ''
    private token:String = ''

    constructor(){
        this.id = localStorage.getItem('user_id') ?? ''
        this.first_name = localStorage.getItem('user_first_name') ?? ''
        this.last_name = localStorage.getItem('user_last_name') ?? ''
        this.email = localStorage.getItem('user_email') ?? ''
        this.token = localStorage.getItem('user_token') ?? ''
    }

    validate():Promise<Boolean|String>{
        const my = this
        return new Promise( (resolve) => {
            fetch(`${this.baseUrl}auth/validate`,{
                method: 'POST',
                headers: {
                    'x-access-token': my.token.toString()
                },
            })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                if(resp.error) return resolve(false)
                return resolve(true)
            })
            .catch(e => {
                console.log("e",e)
                resolve(false)                
            })
        })
    }

    login(email: String,password: String): Promise<Boolean | String>{
        return new Promise( (resolve, reject) => {
            fetch(`${this.baseUrl}auth/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password}),
            })
            .then(resp => resp.json())
            .then(resp => {
                if(resp.error){
                    return reject(resp.error)
                }
                this.updateInfo(resp)
                return resolve(true)
            })
            .catch(e => reject(e.error))
        })
    }

    signUp(first_name:String,last_name: String,email: String,password: String): Promise<Boolean | String>{
        return new Promise( (resolve, reject) => {
            fetch(`${this.baseUrl}auth/register`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({first_name, last_name, email, password}),
            })
            .then(resp => resp.json())
            .then(resp => {
                if(resp.error){
                    return reject(resp.error)
                }
                this.updateInfo(resp)
                return resolve(true)
            })
            .catch(e => reject(e.error))
        })
    }

    logout(){
        this.clearInfo()
    }

    private updateInfo(data: {id:String, first_name:String, last_name:String, email:String, token:String}){
        this.id = data.id
        this.first_name = data.first_name
        this.last_name = data.last_name
        this.email = data.email
        this.token = data.token
        localStorage.setItem('user_id',data.id.toString())
        localStorage.setItem('user_first_name',data.first_name.toString())
        localStorage.setItem('user_last_name',data.last_name.toString())
        localStorage.setItem('user_email',data.email.toString())
        localStorage.setItem('user_token',data.token.toString())
    }

    private clearInfo(){
        this.id = ''
        this.first_name = ''
        this.last_name = ''
        this.email = ''
        this.token = ''
        localStorage.removeItem('user_id')
        localStorage.removeItem('user_first_name')
        localStorage.removeItem('user_last_name')
        localStorage.removeItem('user_email')
        localStorage.removeItem('user_token')
    }

}