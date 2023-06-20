import React from 'react';
import './styles.scss';
import { Typography, Layout, Row, Col, Card } from 'antd';
const { Title } = Typography;
const { Content } = Layout;

export default function Interest(props) {
    const title = props.title;
    return (
        <div id="interest" className="interest-wrapper">
            <Content>
                <Title className='title'>{title}</Title>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card title="運動" bordered={true} className='card'>
                            <p>籃球</p>
                            <p>排球</p>
                            <p>羽球</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card title="休閒" bordered={true} className='card'>
                            <p>桌遊</p>
                            <p>聽音樂</p>
                            <p>踏青</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card title="遊戲" bordered={true} className='card'>
                            <p>LOL</p>
                            <p>傳說對決</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card title="其他" bordered={true} className='card'>
                            <p>程式</p>
                            <p>研究新東西</p>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </div>
    );
}