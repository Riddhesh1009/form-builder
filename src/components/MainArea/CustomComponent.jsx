import React, { useState } from 'react'
import { MdEdit, MdDelete, MdContentCopy } from "react-icons/md";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

const CustomComponent = ({ element, updateLabel, deleteElement, index, moveElementDown, moveElementUp, copyElement }) => {
    const [show, setShow] = useState(false);
    return (
        <div className='w-full flex flex-col p-4 gap-3 bg-secondary/10 border-b border-secondary'>
            <div className='w-full flex flex-col md:flex-row justify-between md:items-center gap-2'>
                <label className="text-secondary">
                    {element.type == "button" ? "Button" : element.label}:
                </label>
                {show &&
                        <input
                            type="text"
                            className='border border-gray-300 rounded-lg px-3 py-1 self-end'
                            onChange={(e) => { updateLabel(element.id, e.target.value) }}
                            value={element.label}
                        />
                }
                <div className='self-end flex items-center gap-1'>
                    <MdDelete onClick={() => { deleteElement(element.id) }} className='text-3xl text-gray-500 border-gray-300 hover:text-red-500 hover:border-red-500 hover:bg-red-100  rounded-md border p-1.5 duration-150' />
                    {!show && <MdEdit onClick={() => { setShow(!show) }} className='text-3xl text-gray-500 border-gray-300 hover:text-green-500 hover:border-green-500 hover:bg-green-100  rounded-md border p-1.5 duration-150' />}
                    {show &&<FaSave onClick={() => { setShow(!show) }} className='text-3xl border-gray-300 rounded-md border p-1.5 bg-green-200 hover:bg-green-100 text-green-700 duration-150 '/>}
                    <MdContentCopy onClick={() => { copyElement(element.id) }} className='text-3xl text-gray-500 border-gray-300 hover:text-sky-500 hover:border-sky-500 hover:bg-sky-100  rounded-md border p-1.5 duration-150' />
                    <FaArrowDown onClick={() => { moveElementDown(index) }} className='text-3xl text-gray-500 border-gray-300 hover:text-gray-700 hover:border-gray-700 hover:bg-gray-100  rounded-md border p-1.5 duration-150' />
                    <FaArrowUp onClick={() => { moveElementUp(index) }} className='text-3xl text-gray-500 border-gray-300 hover:text-gray-700 hover:border-gray-700 hover:bg-gray-100  rounded-md border p-1.5 duration-150' />
                </div>
            </div>
            {element.type == "button" ?
                <button className='bg-primary hover:bg-primary/80 duration-150 p-2 rounded-lg'>{element.label}</button> :
                <>
                    {element.type == "select" ?
                        <select name="select1" id="optn" className='border border-gray-300 p-2 rounded-lg'>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                        </select>
                        :
                        <input
                            type={element.type}
                            className='border border-gray-300 p-2 rounded-lg'
                        />}

                </>
            }

        </div>
    )
}

export default CustomComponent