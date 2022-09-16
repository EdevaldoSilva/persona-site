import React from 'react'

const CreateAccount = () => {
    return (
        <div className='bg-white flex justify-end h-screen'>
            {/* <div className='my-20 mx-auto w-2/4 h-4/5'> */}
            <div className='mt-10 mr-16 w-2/4 h-4/5'>
                <div className='mb-4'>
                    <h1>Criar uma Conta</h1>
                    <p>Já tem uma Persona ID? <a className='text-blue-700' href='#'>Faça o Login</a></p>
                </div>
                <div className='mb-2'>
                    <input type="email" placeholder="Email" className="input input-bordered w-full" />
                </div>
                <div className="flex justify-start gap-3 mb-2">
                    <input type="text" placeholder="Nome" className="input input-bordered w-full" />
                    <input type="text" placeholder="Sobrenome" className="input input-bordered w-full" />
                </div>
                <div className='mb-2'>
                    <input type="password" placeholder="Senha" className="input input-bordered w-full" />
                </div>
                <div className="flex justify-start gap-1 mb-2">
                    <input type="text" placeholder="Dia" className="input input-bordered w-14" />
                    <input type="text" placeholder="Mes" className="input input-bordered w-18" />
                    <input type="text" placeholder="Ano" className="input input-bordered w-16" />
                </div>
                <div className='mb-2'>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Escolha o seu país de Nascimento</option>
                        <option>Angola</option>
                        <option>Portugal</option>
                        <option>Inglaterra</option>
                        <option>Argélia</option>
                        <option>Mali</option>
                    </select>
                </div>
                <div className="form-control mb-2">
                    <label htmlFor='check_email' className="flex justify-start label cursor-pointer">
                        <input type="checkbox" className="checkbox" id='check_email'/>
                        <span className="ml-1 label-text">Entre em contacto comigo por email</span>
                    </label>
                </div>
                <div className='mb-2'>
                    <p>Ao clicar em Criar conta, eu concordo que li e aceito os Termos de uso e a Política de privacidade.</p>
                </div>
                <button className="btn btn-outline">Criar Conta</button>
            </div>
        </div>
    )
}

export default CreateAccount