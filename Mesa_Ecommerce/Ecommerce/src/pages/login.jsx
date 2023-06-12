import { useState } from "react"

export default function Login(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function validation(email, password){
        if(email != null){
            console.log(email)
        }
    }

    return(
    <div>
        <div>
            <h2>Login</h2>
            <p>Entre com seus dados corretamente para acessar o sistema.</p>
            <div>
                <input type="text" onClick={()=>{setEmail()}}/>
                <input type="text"/>
                <button onClick={()=>validation(email, password)}>Entrar</button>
            </div>
        </div>
    </div>
    )
}