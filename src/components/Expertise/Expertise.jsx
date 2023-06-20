import React from 'react';
import './styles.scss';
import { Layout, Row, Col, Divider, Avatar, Tag, Space, Typography, Timeline } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

export default function Expertise(props) {
    const title = props.title;
    return (
        <div id="expertise" className="expertise-wrapper">
            <Content>
                <Title className='title'>{title}</Title>
                <Row>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Avatar className="circle-avatar" src="your_image_url" />
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={16} xl={16} className='col'>
                        <div className='sub-title'>
                            Hi I'm Tony
                        </div>
                        <Divider dashed />
                        <div className='content'>
                            目前就職於仁寶電腦擔任雲端工程師
                        </div>
                        <div className='content'>
                            目前總工作經驗為3 - 4年
                        </div>
                    </Col>
                </Row>
                <Divider orientation="left" className='title'>Skills</Divider>
                <Row>
                    <Space size={[0, 8]} wrap>
                        <Tag color="processing" className='tag'>PHP</Tag>
                        <Tag color="processing" className='tag'>Node.js</Tag>
                        <Tag color="processing" className='tag'>Python</Tag>
                        <Tag color="processing" className='tag'>Android/java</Tag>
                        <Tag color="magenta" className='tag'>HTML</Tag>
                        <Tag color="magenta" className='tag'>CSS</Tag>
                        <Tag color="magenta" className='tag'>Javascript</Tag>
                        <Tag color="magenta" className='tag'>React</Tag>
                        <Tag color="magenta" className='tag'>Angular</Tag>
                        <Tag color="success" className='tag'>MySQL</Tag>
                        <Tag color="success" className='tag'>MongoDB</Tag>
                        <Tag color="gold" className='tag'>git</Tag>
                    </Space>
                </Row>
                <Divider orientation="left" className='title'>Time</Divider>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={8}>
                        <Timeline className='timeline'
                            mode='left'
                            pending="Futrue..."
                            items={[
                            {
                                children: '畢業於國立東華大學',
                            },
                            {
                                children: ' 進入元智大學擔任技術人員',
                            },
                            {
                                children: '進入威納科技擔任PHP工程師',
                            },
                            {
                                children: '進入仁寶電腦擔任雲端工程師',
                            }
                            ]}
                        />
                    </Col>
                </Row>
            </Content>
        </div>
    );

}