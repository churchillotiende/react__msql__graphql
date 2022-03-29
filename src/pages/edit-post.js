import React  , {useCallback} from 'react';
import ReactQuill from 'react-quill';

export default function EditPost(props) {


    const getDelta =  useCallback((value , delta ,source , editor) =>
    {
        console.log(value , delta , source , editor)
    } , []);
    
    return(
        <main className = 'post-editor'>
            <ReactQuill onSubmit = { getDelta }/>
        </main>
    )
}