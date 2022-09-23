import React from 'react'
import { FaUser } from "react-icons/fa";

const CreateAccountNewProfile = () => {
    return (
        <div className='bg-white flex flex-row h-screen px-8'>
            {/* <div className='my-20 mx-auto w-2/4 h-4/5'> */}
            <div className='mt-10 mr-16 w-2/5 h-4/5'>
                <div className='mb-2'>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <span><FaUser className='h-24 w-24 object-cover inline-block mx-auto' /></span>
                        </div>
                    </div>
                </div>
                <div className='mb-2'>
                    <input type="email" placeholder="Título" className="input input-bordered w-full" />
                </div>
                <div className="flex justify-start gap-3 mb-2">
                    <input type="text" placeholder="Cidade" className="input input-bordered w-full" />
                    <input type="text" placeholder="Endereço" className="input input-bordered w-full" />
                </div>
                <div className="flex justify-start gap-3 mb-2">
                    <input type="text" placeholder="BI/Passaporte" className="input input-bordered w-full" />
                    <input type="text" placeholder="Telefone" className="input input-bordered w-full" />
                </div>
                <div className="form-control flex justify-start gap-3 mb-2">
                    <label className="label">Carregar CV</label>
                    <input type="file" className="input w-full" />
                </div>
                <button className="btn btn-outline">Criar Conta</button>
            </div>

        </div>
    )
}

export default CreateAccountNewProfile