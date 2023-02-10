import React from "react";
import CompCss from './CompCss.css'
const AddUser = ({ onAdd }) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value);
        e.target.name.value = "";
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <h3>Добавить пост</h3>
                <input placeholder="Пост" className="input" name="name" />
                <button className="button" onSubmit={handleOnSubmit}>Добавить</button>
                <hr />
            </form>
        </div>
    );
};

export default AddUser;