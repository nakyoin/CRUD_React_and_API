import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Zgl from './zaglushka';


const User = ({ id, name, onDelete, onUpdate }) => {


    const handleDelete = () => {
        onDelete(id);
    }

    const handleUpdate = () => {
        onUpdate(id);
    }

    return (
        <div className='list'>
            <div className='fl'>
                <span>{name}</span>
                <button className='button' onClick={handleDelete}>Удалить</button>
                <button className='button' onClick={handleUpdate}>Изменить</button>
                <Link to={`/user/${id}`}><button className='button'> ←←← Подробнее </button></Link>
                <Zgl />
            </div>
        </div>
    )
}

export default User;