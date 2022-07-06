import React from 'react'
import Layout from '../../components/Layout'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getPosts } from '../../lib/posts';
import Link from 'next/link'

//get static data from backend /db/api
export const getStaticProps = async () => {
    const posts = await getPosts();
    return {
        props: {
            posts: posts
        }
    };
}

const Posts = ({ posts }) => {
    return (
        <Layout>
            {posts.map((post, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/736x/e8/8b/4a/e88b4a978c89fabd36c5bc0941c3107e.jpg" />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {
                                post.body
                            }
                        </Card.Text>
                        <Link href={`/posts/${post.id}`}>
                            <Button variant="primary">Go somewhere</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))

            }
        </Layout>
    )
}



export default Posts