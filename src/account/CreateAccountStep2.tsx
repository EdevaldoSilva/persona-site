import React from 'react'

const CreateAccountStep2 = () => {
    return (
        <div className='card mx-auto w-3/5 h-screen'>
            <div className='card-body mt-20'>
                <div className='mb-16'>
                    <h2 className='card-title'>Qual é o seu objetivo dentro do mercado liberal?</h2>
                    <p>Queremos destacar as oportunidades que melhor se adequam aos seus objetivos e mostrar todas as possibilidades.</p>
                </div>
                <div>
                    <div className='form-control mt-1'>
                        <label className="flex justify-start">
                            <input type="radio" name="radio" className='radio' />
                            <span className="ml-2 label-text">Criar a minha principal fonte de rendimento.</span>
                        </label>
                    </div>
                    <div className='form-control mt-1'>
                        <label className="flex justify-start">
                            <input type="radio" name="radio" className='radio' />
                            <span className="ml-2 label-text">Criar uma fonte de rendimento extra.</span>
                        </label>
                    </div>
                    <div className='form-control mt-1'>
                        <label className="flex justifys-start">
                            <input type="radio" name="radio" className='radio' />
                            <span className="ml-2 label-text">Adquirir experiência profissional.</span>
                        </label>
                    </div>
                    <div className='form-control mt-1'>
                        <label className="flex justifys-start">
                            <input type="radio" name="radio" className='radio' />
                            <span className="ml-2 label-text">Ainda não tenho nenhum objetivo, estou a explorar.</span>
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

export default CreateAccountStep2