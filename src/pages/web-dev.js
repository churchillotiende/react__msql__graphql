import { PostGrid } from "../components/common";
import withTitle from "../components/common/with-title";
import { useQuery }  from '@apollo/react-hooks';
import { GET_POSTS_BY_CATEGORIES_QUERY } from "../queries/posts";

const catIds = [1 , 2  ,3  ,4 , 5 , 9]

export default function WebDev({history})
{
    const{data , error} = useQuery(
        GET_POSTS_BY_CATEGORIES_QUERY, {
            variables:
            {
                cat_ids:catIds
            }
        }
    )
    if(error)
    {
        return 'Something went wrong'
        
    }
    return withTitle(
            'Web Development'  ,
            data?.posts
                ?<PostGrid posts = {data.posts} />
                :'Loading'
        )
}