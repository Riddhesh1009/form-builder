import React from 'react'
import { ImCross } from "react-icons/im";

const Modal = ({ label, text, handleCancel, handleOk }) => {
    return (
        <div className='absolute top-0 left-0 h-screen w-full bg-black/20 flex justify-center items-center'>
            <div className='md:max-w-[50%]  min-w-[90%] md:min-w-[40%] lg:min-w-[30%] bg-gray-50 rounded-lg overflow-hidden'>
                <div className='flex justify-between gap-2 p-4 bg-sky-200 text-gray-700'>
                    <p className=''>{label}</p>
                    <ImCross onClick={handleCancel} className='text-sm' />
                </div>
                {text == null ?
                    <div className='flex justify-center gap-2 p-4'>
                        <button onClick={handleCancel} className='w-full text-red-500 bg-red-100 font-semibold p-2 rounded-lg cursor-pointer'>No</button>
                        <button onClick={handleOk} className='w-full text-sky-50 bg-sky-500 font-semibold p-2 rounded-lg cursor-pointer'>Yes</button>
                    </div>
                    :
                    <div className='p-4 text-gray-700' >
                        <p>{text}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Modal