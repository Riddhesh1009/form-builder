import React from 'react'

import CustomComponent from './CustomComponent';

const CustomForm = ({ customForm, setCustomForm }) => {
    // console.log(customForm);
    const updateLabel = (id, newLabel) => {
        setCustomForm((prevElements) =>
            prevElements.map((el) => (el.id === id ? { ...el, label: newLabel } : el))
        );
    };

    const deleteElement = (id) => {
        setCustomForm((prevElements) =>
            prevElements.filter((el) => el.id !== id)
        );
    };

    const moveElementUp = (index) => {
        if (index > 0) {
            const updatedElements = [...customForm];
            [updatedElements[index - 1], updatedElements[index]] = [
                updatedElements[index],
                updatedElements[index - 1],
            ];
            setCustomForm(updatedElements);
        }
    };

    const moveElementDown = (index) => {
        if (index < customForm.length - 1) {
            const updatedElements = [...customForm];
            [updatedElements[index], updatedElements[index + 1]] = [
                updatedElements[index + 1],
                updatedElements[index],
            ];
            setCustomForm(updatedElements);
        }
    };

    const copyElement = (id) => {
        const elementToCopy = customForm.find((el) => el.id === id);
        if (elementToCopy) {
            const newElement = { ...elementToCopy, id: customForm.length + 1 };
            setCustomForm([...customForm, newElement]);
        }
    };
    return (
        <div className='h-full w-full bg-gray-50 text-gray-700 md:rounded-xl overflow-auto'>
            {customForm.length > 0 ?
                <>
                    {customForm.map((element, index) => (
                        <CustomComponent
                            key={index}
                            index={index}
                            element={element}
                            updateLabel={updateLabel}
                            deleteElement={deleteElement}
                            moveElementDown={moveElementDown}
                            moveElementUp={moveElementUp}
                            copyElement={copyElement}
                        />
                    ))}
                </>
                :
                <div className='h-full w-full flex justify-center items-center'>
                    <p className='text-xl italic text-gray-400 text-center whitespace-pre-wrap px-2'>Add Components from Tool Bar</p>
                </div>
            }
        </div>
    )
}

export default CustomForm