import React from 'react'
import Layout from '../../components/Layout';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { getPostIds, getPostById } from '../../lib/posts'

export const getStaticPaths = async () => {
    const paths = await getPostIds();
    return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
    const post = await getPostById(params.id);
    return {
        props: {
            post: post
        }
    }
}


const PostDetail = ({ post }) => {
    return (
        <Layout>
            {
                <Card key={post.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/736x/e8/8b/4a/e88b4a978c89fabd36c5bc0941c3107e.jpg" />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {
                                post.body
                            }
                        </Card.Text>
                        <Link href={'/posts'}>
                            <Button variant="primary">Go somewhere</Button>
                        </Link>
                    </Card.Body>
                </Card>
            }
        </Layout>
    )
}



export default PostDetail