import React from 'react';
import './styles.scss';
import { Descriptions, Image, Row, Col, Space, Divider } from 'antd';
import { InstagramOutlined, FacebookFilled, GithubFilled } from '@ant-design/icons';
import personPic from 'assets/images/person.jpg';


export default function Person() {
    const contentStyle = {
        fontWeight: 'bold'
    };

    const goToPage = (type) => {
        const w = window.open('about:blank');
        switch(type) {
            case 'ig':
                w.location.href = "https://www.instagram.com/";
                break;
            case 'fb':
                w.location.href= "https://www.facebook.com/";
                break;
            case 'gh':
                w.location.href= "https://github.com/";
                break;
            default:
                break;
        }
    }

    return (
        <div className='person-wrapper'>
            <Descriptions title="Person" layout="vertical" column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                <Descriptions.Item label="照片">
                    <Image
                        width={200}
                        src={personPic}
                    />
                </Descriptions.Item>
            </Descriptions>
            <Descriptions layout="vertical" column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                <Descriptions.Item label="中文姓名" contentStyle={contentStyle}>吳建穎</Descriptions.Item>
                <Descriptions.Item label="英文名字" contentStyle={contentStyle}>Tony</Descriptions.Item>
                <Descriptions.Item label="生日" contentStyle={contentStyle}>1996/09/08</Descriptions.Item>
                <Descriptions.Item label="電話" contentStyle={contentStyle}>0980723509</Descriptions.Item>
                <Descriptions.Item label="出生地" contentStyle={contentStyle}>台灣省桃園市</Descriptions.Item>
                <Descriptions.Item label="Email" contentStyle={contentStyle}>h0980723509@gmail.com</Descriptions.Item>
            </Descriptions>
            <Divider />
            <Row>
                <Col>
                    <Space size={[16, 8]} wrap>
                        <InstagramOutlined onClick={() => { goToPage('ig') }} className='icon' style={{color: 'pink'}}/>
                        <FacebookFilled onClick={() => { goToPage('fb') }} className='icon' style={{color: 'blue'}}/>
                        <GithubFilled onClick={() => { goToPage('gh') }} className='icon' style={{color: 'black'}} />
                    </Space>
                </Col>
            </Row>
            
        </div>
    );
}