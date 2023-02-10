import React from 'react';
import CompCss from './CompCss.css'
import Comm from './Comm';




const Zgl = ({ id, name, onDelete, onUpdate }) => {


    const handleDelete = () => {
        onDelete(id);
    }

    const handleUpdate = () => {
        onUpdate(id);
    }

    return (
        <div className='list'>
            <Comm />
        </div>
    )
}


export default Zgl;