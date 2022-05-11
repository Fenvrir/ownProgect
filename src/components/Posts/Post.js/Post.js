import React from 'react'
import Styles from './Post.module.css';

function Post({ name, id, description, deletePost }) {
    return (
        <div className={Styles.Post}>
            <div>
                <p className={Styles.name}>
                    {id + '. ' + name}
                </p>
                <p>
                    {description}
                </p>
            </div>
            <div >
                <button
                    onClick={deletePost}
                    className={Styles.button}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Post