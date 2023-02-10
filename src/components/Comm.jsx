import React from "react";
import './CompCss.css'

function Comment() {

    const [comment, setComment] = React.useState("");
    const [comments, setComments] = React.useState([]);

    const handleComment = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, comment]);
        setComment("");
    }

    const handleDelete = (index) => {
        const newComments = [...comments];
        newComments.splice(index, 1);
        setComments(newComments);
    }






    return (
        <div className="comment">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Добавить комментарий" value={comment} onChange={handleComment} />
                <button type="submit">Отправить</button>
            </form>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        {comment}
                        <button onClick={() => handleDelete(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comment;