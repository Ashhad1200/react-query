import { useQuery } from 'react-query';
import { Card } from 'antd';
import { Col, Divider, Row } from 'antd';
import LoadingScreen from '../../components/loadingScreen';

import fetchData from './fetchData';

const Home = () => {


    const { data, isLoading, isError, error } = useQuery({ queryKey: 'data' ,queryFn: fetchData })

    if (isLoading) {
        return <div><LoadingScreen></LoadingScreen></div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Row gutter={[16,16]}>

                {data.map((item) => (
                    <Col className="gutter-row" span={7}>
                        <div >
                            <Card
                                title={item.name}
                                bordered={true}
                                style={{
                                    width: '100%',
                                    background: '#CCD1D1',
                                    margin: 13
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