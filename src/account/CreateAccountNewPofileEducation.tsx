import React from 'react'
import { FaUser } from "react-icons/fa";

const CreateAccountNewProfileEducation = () => {
    return (
        <div className='items-center h-screen w-4/5 mx-auto pt-10'>
            <div className='mb-2'>
                <input type="email" placeholder="Título" className="input input-bordered w-full" />
            </div>
            <div className="flex justify-start gap-3 mb-2">
                <input type="text" placeholder="Grau" className="input input-bordered w-full" />
            </div>
            <div className="flex justify-start gap-3 mb-2">
                <input type="text" placeholder="Campo de Estudo" className="input input-bordered w-full" />
                <input type="text" placeholder="Região/País" className="input input-bordered w-full" />
            </div>
            <div className="flex justify-start gap-3 mb-2">
                <input type="text" placeholder="Data Inicio" className="input input-bordered w-full" />
                <input type="text" placeholder="Data Fim" className="input input-bordered w-full" />
            </div>
            <div className="form-control mb-2">
                <label className="label">
                    <span className="label-text">Descrição</span>
                </label>
                <textarea className="textarea textarea-bordered h-44" placeholder="Bio"></textarea>
            </div>
            <button className="btn btn-outline">Criar Conta</button>
        </div>
    )
}

export default CreateAccountNewProfileEducation