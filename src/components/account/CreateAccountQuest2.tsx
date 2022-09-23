import React from 'react'

const CreateAccountQuest2 = () => {
    return (
        <div className='card mx-auto w-3/5 h-screen'>
            <div className='card-body mt-20'>
                <div className='mb-16'>
                    <h2 className='card-title'>Alguma vez foi freelancer<br />ou trabalhou de forma autónoma?</h2>
                    <h3>Isto  irá ajudar-nos a dar-lhe o suporte necessário ao longo do caminho.</h3>
                    <span>(Não partilharemos a sua resposta com mais ninguém, incluindo potenciais clientes)</span>
                </div>
                <div>
                    <div className='form-control mt-1'>
                        <label className="flex justify-start">
                            <input type="radio" name="radio" className='radio' />
                            <span className="ml-2 label-text">Não, para mim é novidade.</span>
                        </label>
                    </div>
                    <div className='form-control mt-1'>
                        <label className="flex justify-start">
                            <input type="radio" name="radio" className='radio' />
                            <span className="ml-2 label-text">Tentei, mas faltou condições para continuar.</span>
                        </label>
                    </div>
                    <div className='form-control mt-1'>
                        <label className="flex justifys-start">
                            <input type="radio" name="radio" className='radio' />
                            <span className="ml-2 label-text">Sim, tenho alguma experiência.</span>
                        </label>
                    </div>
                </div>
                <div className='card-actions justify-end'>
                    <button className='btn'>Seguinte</button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountQuest2