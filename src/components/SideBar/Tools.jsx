import React from 'react'

const Tools = ({ children,label,handleAdd,type }) => {
    return (
        <div onClick={()=>{handleAdd(type,label)}} className='p-4 md:p-0 md:py-4 md:px-6 flex justify-between items-center gap-4 w-full text-sky-500 bg-sky-100 rounded-lg cursor-pointer'>
            {/* <RiText className='w-full md:w-auto text-xl' /> */}
            {children}
            <p className='hidden md:block'>{label}</p>
        </div>
    )
}

export default Tools