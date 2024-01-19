import React, { useState } from 'react'
import { RiText } from "react-icons/ri";
import { MdNumbers } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { GoMultiSelect } from "react-icons/go";
import { FiUpload } from "react-icons/fi";
import { RxButton } from "react-icons/rx";
import Tools from './Tools';
import Modal from '../Utils/Modal';

const ToolBar = ({ customForm, setCustomForm }) => {
    const [modalLabel, setModalLabel] = useState(null);
    const [modalText, setModalText] = useState(null);
    const handleAdd = (type, label) => {
        const newForm = [...customForm];
        newForm.push({
            id: customForm.length + 1,
            label: label,
            type: type,
        });
        setCustomForm(newForm);
    }

    const generateHTMLForm = () => {
        let htmlForm = '<form>';

        customForm.forEach((element) => {
            htmlForm += `<label>${element.label}: `;
            switch (element.type) {
                case "button":
                    htmlForm += `<button>${element.label}</button>`;
                    break;
                case 'select':
                    htmlForm += `<select name="${element.label}"><option>Option 1</option><option>Option 2</option></select>`;
                    break;
                default:
                    htmlForm += `<input type="${element.type}" name="${element.label}" />`;
                    break;
            }
            htmlForm += `</label><br />`;
        });

        htmlForm += '</form>';
        console.log(htmlForm);
        setModalLabel('Form HTML is ready!')
        setModalText(htmlForm);
    };

    const generateJson = () => {
        setModalLabel('JSON is ready!')
        setModalText(JSON.stringify(customForm));
    }

    return (
        <div className='w-full '>
            <p className='text-primary bg-secondary font-semibold p-4 hidden md:block rounded-lg'>Add Form Component</p>
            <div className='w-full p-2 md:p-0 md:py-4 flex flex-col gap-2 md:gap-4 '>
                <Tools handleAdd={handleAdd} type="text" label='Text'>
                    <RiText className='w-full md:w-auto text-xl' />
                </Tools>
                <Tools handleAdd={handleAdd} type="button" label='Button'>
                    <RxButton className='w-full md:w-auto text-xl' />
                </Tools>
                <Tools handleAdd={handleAdd} type="select" label='Select'>
                    <GoMultiSelect className='w-full md:w-auto text-xl' />
                </Tools>
                <Tools handleAdd={handleAdd} type="date" label='Date'>
                    <IoCalendarNumber className='w-full md:w-auto text-xl' />
                </Tools>
                <Tools handleAdd={handleAdd} type="file" label='File'>
                    <FiUpload className='w-full md:w-auto text-xl' />
                </Tools>
                <Tools handleAdd={handleAdd} type="number" label='Number'>
                    <MdNumbers className='w-full md:w-auto text-xl' />
                </Tools>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 px-2 sm:px-0'>
                <button onClick={() => { generateJson() }} className='text-gray-50 bg-primary hover:bg-primary/80 font-semibold p-2 rounded-xl cursor-pointer'>{`[{...}]`}</button>
                <button onClick={() => { generateHTMLForm() }} className='text-gray-50 bg-primary hover:bg-primary/80 font-semibold p-2 rounded-xl cursor-pointer'>Html</button>
                <button onClick={() => { setModalLabel('Are you sure you want to clear the form?') }} className='lg:col-span-2 text-red-500 bg-red-100 hover:bg-red-200 duration-300 font-semibold p-2 rounded-xl cursor-pointer'>Clear</button>
            </div>
            {modalLabel != null && <Modal
                label={modalLabel}
                text={modalText}
                handleCancel={() => { setModalLabel(null); setModalText(null); }}
                handleOk={() => { setCustomForm([]); setModalLabel(null); setModalText(null); }}
            />}
        </div>
    )
}

export default ToolBar



{/* <div className='p-4 md:p-0 md:py-4 md:px-6 flex justify-between items-center gap-4 w-full text-sky-500 bg-sky-100 rounded-lg cursor-pointer'>
    <RiText className='w-full md:w-auto text-xl'/>
    <p className='hidden md:block'>Text</p>
</div> */}