import React from 'react'

const CreateAccountStep3 = () => {
    return (
        <div className='card mx-auto w-3/5 h-screen'>
            <div className='card-body mt-20'>
                <div className='mb-16'>
                    <h2 className='card-title'>Qual é o principal serviço que oferece??</h2>
                    <p>Escolha as categorias que melhor descrevem o tipo de trabalho que faz para que possamos mostrar-lhe o cliente certo nos resultados de pesquisa.</p>
                </div>
                <div>
                    <select class="select w-full max-w-xs">
                        <option disabled selected>Selecione a Categoria</option>
                        <option>Categoria 1</option>
                        <option>Categoria 2</option>
                        <option>Categoria 3</option>
                    </select>

                    <select class="select w-full max-w-xs">
                        <option disabled selected>Selecione a Sub-Categoria</option>
                        <option>SubCategoria 1</option>
                        <option>SubCategoria 2</option>
                        <option>SubCategoria 3</option>
                    </select>
                </div>
                <div className='card-actions justify-end'>
                    <button className='btn'>Seguinte</button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountStep3