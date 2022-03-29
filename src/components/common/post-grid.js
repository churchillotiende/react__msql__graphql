import React , {useState , useEffect, useMemo} from 'react';
import{ Link} from 'react-router-dom';
import {Pagination} from 'antd';
import { TagsRow } from './';
let urls = [
     '../../assets/images/anyone_can_code.jpg',
     '../../assets/images/apollo_graphql.jpg',
     '../../assets/images/cloud_storage.jpg',
     '../../assets/images/logo.jpg',
     '../../assets/images/money.jpg',
     '../../assets/images/neuron.jpg',
     '../../assets/images/programming_languages.jpg',
     '../../assets/images/puzzled_programmer.jpg'  
 ]


const PostGrid  = ({ posts }) => {
    const [pageSize , setPageSize] = useState(9);
    const [current , setCurrent] = useState(1);

    // useMemo is used to avoid unneccessary calculations

    const paginatedPosts = useMemo(() =>
    {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize
        return  posts.slice(firstIndex , lastIndex)
    }
    )

    // const imgAr = ImageArr.map(post => post.image)
    // const imgAr1 = ImageArr1.map(post =>post.image)

    useEffect(() =>
    {
        window.scroll(
            {
                behavior:'smooth',
                top:500 , 
                left:0


            }
        )

    } , [current , pageSize])

    return(
        <section className = 'grid-pagination-container'>
            <section className= 'post-grid container'>
                {paginatedPosts.map((post , index) => (
                    <div className = 'post-container'>
                        <figure>
                            <Link to = {`/post/:${post.id}` }>
                                <img  src={ require(`../../assets/images/${post.image}`).default } alt= {post.image} />
                            </Link>
                        </figure>
                        <TagsRow tags = { post.categories }/>
                        <h2>{post.title}</h2>
                        <p className = 'author-text'>
                            <span>
                                By:
                                <Link to = {`/authors/${post.author}`}>
                                    {post.author}
                                </Link>
                            </span>
                            <span>
                                -{post.date}
                            </span>
                        </p>
                        <section>
                            <p className = 'description-text'>
                                {post.description}
                            </p>
                        </section>
                        <Link to ={post.link}><button type='primary' style = {{borderRadius:'15px'}}>Read More ...</button></Link>

                    </div>
                ))}
                <Pagination 
                    simple
                    showSizeChanger
                    onShowSizeChange = {setPageSize}
                    pageSize = { pageSize }
                    total = { posts.length }
                    defaultCurrent = { current }
                    onChange= {setCurrent}
                />
            </section>
        </section>
    )
}

export default PostGrid;

