import React from 'react'
import { FaUser } from "react-icons/fa";

const CreateAccountNewProfileSkills = () => {
    return (
        <div className='items-center h-screen w-4/5 mx-auto pt-10'>
            <div className='mb-2'>
                <input type="email" placeholder="Título" class="input input-bordered w-full" />
            </div>
            <div className="flex justify-start gap-3 mb-2">
                <input type="text" placeholder="Empresa/Organização" class="input input-bordered w-full" />
            </div>
            <div className="flex justify-start gap-3 mb-2">
                <input type="text" placeholder="Localização" class="input input-bordered w-full" />
                <input type="text" placeholder="Região/País" class="input input-bordered w-full" />
            </div>
            <div class="form-control mb-2">
                <label class="cursor-pointer">
                    <input type="checkbox" checked="checked" class="checkbox" />
                    <span class="label-text">Estou actualmente a trabalhar nessa area</span>
                </label>
            </div>
            <div className="flex justify-start gap-3 mb-2">
                <input type="text" placeholder="Data Inicio" class="input input-bordered w-full" />
                <input type="text" placeholder="Data Fim" class="input input-bordered w-full" />
            </div>
            <div class="form-control mb-2">
                <label class="label">
                    <span class="label-text">Descrição</span>
                </label>
                <textarea class="textarea textarea-bordered h-44" placeholder="Bio"></textarea>
            </div>
            <button class="btn btn-outline">Criar Conta</button>
        </div>
    )
}

export default CreateAccountNewProfileSkills