import React from 'react';
import './styles.scss';
import { Layout, Row, Col, Divider, Avatar, Tag, Space } from 'antd';
const { Content } = Layout;

export default function Expertise() {

    return (
        <div id="expertise" className="expertise-wrapper">
            <Content>
                <Row>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Avatar className="circle-avatar" src="your_image_url" />
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={16} xl={16} className='col'>
                        <div className='title'>
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
                        <Tag color="magenta" className='tag'>PHP</Tag>
                        <Tag color="magenta" className='tag'>Node.js</Tag>
                        <Tag color="magenta" className='tag'>Python</Tag>
                        <Tag color="magenta" className='tag'>HTML</Tag>
                        <Tag color="magenta" className='tag'>CSS</Tag>
                        <Tag color="magenta" className='tag'>Javascript</Tag>
                        <Tag color="magenta" className='tag'>Android/java</Tag>
                        <Tag color="magenta" className='tag'>MySQL</Tag>
                    </Space>
                </Row>
            </Content>
        </div>
    );

}