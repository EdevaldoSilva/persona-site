import React from 'react'
import { FaUser } from "react-icons/fa";

const CreateAccountNewProfileBio = () => {
    return (
        <div className='items-center h-screen w-4/5 mx-auto pt-10'>
            <h1>Biografia</h1>
            <p>Agora escreva uma biografia para contar ao mundo sobre si mesmo. Ajudar as pessoas a conhecê-lo num ápice. Em que trabalho é melhor? Diga-lhes claramente, usando parágrafos ou pontos de bala. Pode sempre editar mais tarde - certifique-se de que já é revisto!</p>
            
            <div className="pt-4">
                <textarea className="textarea textarea-bordered h-72 w-full" placeholder="Biografia"></textarea>
            </div>
            <button className="btn btn-outline">Criar Conta</button>
        </div>
    )
}

export default CreateAccountNewProfileBio