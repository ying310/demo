import React from 'react';
import './styles.scss';
import { Descriptions, Image, Row, Col, Space } from 'antd';
import { InstagramOutlined, FacebookFilled, GithubFilled } from '@ant-design/icons';


export default function Person() {
    const contentStyle = {
        fontWeight: 'bold'
    };

    return (
        <div className='person-wrapper'>
            <Descriptions title="Person" layout="vertical" column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                <Descriptions.Item label="照片">
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Descriptions.Item>
            </Descriptions>
            <Descriptions layout="vertical" column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                <Descriptions.Item label="中文姓名" contentStyle={contentStyle}>吳建穎</Descriptions.Item>
                <Descriptions.Item label="英文名字" contentStyle={contentStyle}>Tony</Descriptions.Item>
                <Descriptions.Item label="生日" contentStyle={contentStyle}>1996/09/08</Descriptions.Item>
                <Descriptions.Item label="電話" contentStyle={contentStyle}>0980723509</Descriptions.Item>
                <Descriptions.Item label="出生地" contentStyle={contentStyle}>台灣省桃園市</Descriptions.Item>
                <Descriptions.Item label="Email" contentStyle={contentStyle} span={2}>h0980723509@gmail.com</Descriptions.Item>
            </Descriptions>
            {/* <Carousel autoplay>
                <div >
                    <InstagramOutlined style={contentStyle1}/>
                </div>
                <div>
                    <FacebookFilled style={contentStyle1}/>
                </div>
                <div>
                <h3 style={contentStyle1}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle1}>4</h3>
                </div>
            </Carousel> */}
            <Row>
                <Col>
                    <Space size={[16, 8]} wrap>
                        <InstagramOutlined className='icon' style={{color: 'pink'}}/>
                        <FacebookFilled className='icon' style={{color: 'blue'}}/>
                        <GithubFilled className='icon' style={{color: 'black'}} />
                    </Space>
                </Col>
            </Row>
            
        </div>
    );
}