import { useQuery } from 'react-query';
import axios from 'axios';
import { Card } from 'antd';
import { Col, Divider, Row } from 'antd';
import LoadingScreen from '../../components/loadingScreen';

const Home = () => {
    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    };

    const { data, isLoading, isError, error } = useQuery('data', fetchData);

    if (isLoading) {
        return <div><LoadingScreen></LoadingScreen></div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {/* <h1>
                This is Home
            </h1>

            <h1>
                your Users
            </h1> */}
            <Row gutter={[16]}>

            {data.map((item) => (
                                <Col className="gutter-row" span={6}>
                                <div >
                                <Card
                                title={item.name}
                                bordered={true}
                                style={{
                                    width: 300,
                                    background:'#CCD1D1',
                                    margin:13
                                }}
                            >
                                <div key={item.id}>
                                    <h3>
                                        {item.username}
                                    </h3>
                                    <h3>
                                        {item.email}
                                    </h3>
                                    <h3>
            
                                        {item.phone}
                                    </h3>
            
                                </div>
            
                            </Card>
                                </div>
                            </Col>
                
                ))}
                </Row>


        </>
    );
}

export default Home;