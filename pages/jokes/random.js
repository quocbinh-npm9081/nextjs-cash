import React from 'react'
import Layout from '../../components/Layout';
import { getRandomJokes } from '../../lib/jokes'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const getServerSideProps = async () => {
    const joke = await getRandomJokes();
    console.log(joke);

    return {
        props: {
            joke: joke
        }
    };
}
const Random = ({ joke }) => {
    return (
        <Layout>{
            <Card key={joke.id} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        {
                            joke.value
                        }
                    </Card.Text>

                </Card.Body>
            </Card>
        }</Layout>
    )
}

export default Random