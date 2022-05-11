import React from "react";
import { Formik, Field, Form } from "formik";
import './PostInput.scss'

function PostInput(props) {
    return (
        <div className="PostInput">
            <AddPostFormik  addPost={props.addPost} />
        </div>
    );
}

const AddPostFormik = ({ addPost }) => {
    const initialValues = {
        name: "",
        description: "",
    };
    const onSubmit = (values) => {
        addPost(values.name, values.description);
    };

    return (
        <Formik
            initialValues={initialValues} onSubmit={onSubmit} >
            <Form>
                <Field name="name" type="text" placeholder="Enter post name..."></Field>
                <div>
                    <Field
                        as="textarea"
                        name="description"
                        placeholder="Enter post desc..."
                    ></Field>
                </div>
                <div>
                    <button type="submit">Add Post</button>
                </div>
            </Form>
        </Formik>
    );
};

export default PostInput;
