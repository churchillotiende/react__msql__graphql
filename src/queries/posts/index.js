import gql from 'graphql-tag';


export const GET_POSTS_BY_CATEGORIES_QUERY  = gql `
    query GetBlogPostsByCategories($cat_ids:[Int])
    {
        posts:getPostsByCategories(cat_ids:$cat_ids)
        {
            id
            title
            description
            updated_at
            author
            image
            categories 

        }

    }

`


export const GET_POST_QUERY = gql`
    query GetPostQuery($id:ID!)
    {
        post:getPost(id:$id)
        {
            id
            author_id
            title
            text
            keyword1
            keyword2
            image
            bg_src
            bg_type
            updated_at

        }
    }

`

export const ADD_POST_MUTATION = gql`
    mutation AddPostMutation($data:String)
    {
        post:createPost(data:$id)
        {
            title
            categories
            image
            description
            keyword1
            keyword2
            bg_src
            bg_type
        }
    }
`

export const POST_COMMENT_MUTATION = gql `
    mutation PostCommentMutation($text:String , $id:ID){
        response:postComment(text:$text , id:$id)
    }
`

export const LOGIN_MUTATION = gql`
    mutation Login {
        login
    }
`

export const SIGNUP_MUTATION = gql`
    mutation Signup {
        signup
    }
`









