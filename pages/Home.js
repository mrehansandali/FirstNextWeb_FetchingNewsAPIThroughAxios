import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Blog from './Blog'

const Home = () => {
    const [myData, setmyData] = useState([])

    const getAPIData = async () => {
        const newsArticles = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3fe524989e4c40548f8297efa466eb72")
        .then((res)=> setmyData(res.data.articles))
        
    }

    useEffect(() => {
        getAPIData()
    }, [])



    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>


            <div className="container">
                <div className="row">
                    {myData.map(post => {
                        const { title, content, urlToImage } = post;
                        return (
                            <div className='col-md-4 my-3'>
                                <Blog
                                    title={title}
                                    content={content}
                                    imgurl={urlToImage}
                                />
                            </div>
                        )
                    })}

                </div>
            </div>



        </div>
    )
}

export default Home