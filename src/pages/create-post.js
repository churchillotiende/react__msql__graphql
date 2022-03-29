import React , {useState} from 'react';
import { ADD_POST_MUTATION } from '../queries/posts';
import { useMutation } from '@apollo/client';

export default function CreatePost(props) {
        const [formState, setFormState] = useState({
            title: '',
            categories: '',
            image:'' , 
            description:'' , 
            keyword1:'' , 
            keyword12:'' , 
            bg_src:'' , 
            bg_type:''
        })  

        const [createpost] = useMutation(ADD_POST_MUTATION, {
            variables: {

                title: formState.title,
                categories: formState.categories,
                image:formState.image, 
                description:formState.description , 
                keyword1:formState.keyword1 , 
                keyword12:formState.keyword12 , 
                bg_src:formState.bg_src, 
                bg_type:formState.bg_type

            }
        })

  return (
    <main className = 'post-editor'>
        <form
            onSubmit={(e) => {
                e.preventDefault();  
                createpost();
            }}
        >     
            <div className="flex flex-column mt3">
                <input
                    className="mb2"
                    value={formState.title}
                    onChange={(e) =>
                    setFormState({
                        // It will iterate through the formstate values 
                        ...formState,
                        title: e.target.value
                    })
                    }
                    type="text"
                    placeholder="Enter the title"
                />
                <input
                    className="mb2"
                    value={formState.categories}
                    onChange={(e) =>
                    setFormState({
                        ...formState,
                        categories: e.target.value
                    })
                    }
                    type="text"
                    placeholder="Enter category"
                />

                <input
                    className="mb2"
                    value={formState.image}
                    onChange={(e) =>
                    setFormState({
                        ...formState,
                        image: e.target.value
                    })
                    }
                    type="Image"
                    placeholder="Select image"
                />

                <input
                    className="mb2"
                    value={formState.description}
                    onChange={(e) =>
                    setFormState({
                        ...formState,
                        description: e.target.value
                    })
                    }
                    type="text"
                    placeholder="Enter the description"
                />

                <input
                    className="mb2"
                    value={formState.keyword1}
                    onChange={(e) =>
                    setFormState({
                        ...formState,
                        keyword1: e.target.value
                    })
                    }
                    type="text"
                    placeholder="keyword 1"
                />

                <input
                    className="mb2"
                    value={formState.keyword2}
                    onChange={(e) =>
                    setFormState({
                        ...formState,
                        keyword2: e.target.value
                    })
                    }
                    type="text"
                    placeholder="keyword 2"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </main>
  );
};

