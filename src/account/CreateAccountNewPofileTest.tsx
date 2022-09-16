import React from 'react'
import { FaUser, FaArrowAltCircleDown } from "react-icons/fa"
import { Disclosure } from '@headlessui/react'

const CreateAccountNewProfileTest = () => {
    return (
        <div className='bg-white content-center h-screen'>
            {/* <div className='my-20 mx-auto w-2/4 h-4/5'> */}
            <div className='mt-10 w-2/4 h-4/5 mx-auto'>
                <div className='mb-2'>
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <span><FaUser className='h-24 w-24 object-cover inline-block mx-auto' /></span>
                        </div>
                    </div>
                </div>
                <div className='mb-2'>
                    <input type="email" placeholder="Título" class="input input-bordered w-full" />
                </div>
                <div className="flex justify-start gap-3 mb-2">
                    <input type="text" placeholder="Cidade" class="input input-bordered w-full" />
                    <input type="text" placeholder="Endereço" class="input input-bordered w-full" />
                </div>
                <div className="flex justify-start gap-3 mb-2">
                    <input type="text" placeholder="BI/Passaporte" class="input input-bordered w-full" />
                    <input type="text" placeholder="Telefone" class="input input-bordered w-full" />
                </div>
                <div className="form-control flex justify-start gap-3 mb-2">
                    <label class="label">Carregar CV</label>
                    <input type="file" class="input w-full" />
                </div>
                <button class="btn btn-outline">Criar Conta</button>
            </div>

            <div className='mt-10 w-2/4 h-4/5 mx-auto'>
                <Disclosure>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200">
                        <span>Is team pricing available?</span>
                        <FaArrowAltCircleDown />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <div className='p-3 border rounded-lg border-gray-200'>
                            <div>
                                <h3>Ede</h3>
                                <h6>Edddds</h6>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button className='text-black'>Novo</button>
                        </div>

                    </Disclosure.Panel>
                </Disclosure>
            </div>

        </div>
    )
}

export default CreateAccountNewProfileTest