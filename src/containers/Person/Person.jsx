import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Descriptions, Image, Row, Col, Space, Divider, Skeleton  } from 'antd';
import { InstagramOutlined, FacebookFilled, GithubFilled } from '@ant-design/icons';
import personPic from 'assets/images/person.jpg';
import { getUser } from 'apis/UserApi';
import Emptydata from 'components/Emptydata/';


export default function Person() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        console.log('effect');
        const init = async() => {
            try {
                const res = await getUser();
                if (res?.success) {
                    setUser(res.data);
                } else {
                    setUser(false);
                }
            } catch(err) {
                console.log(err);
                setUser(false);
            }
        }
        init();
    }, []);

    const contentStyle = {
        fontWeight: 'bold'
    };

    const goToPage = (type) => {
        const w = window.open('about:blank');
        switch(type) {
            case 'ig':
                w.location.href = "https://www.instagram.com/jianying310/";
                break;
            case 'fb':
                w.location.href= "https://www.facebook.com/profile.php?id=100002558677413";
                break;
            case 'gh':
            default:
                w.location.href= "https://github.com/ying310";
                break;
        }
    }

    return (
        <div className='person-wrapper'>
            {user ? <>
                <Descriptions layout="vertical" column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                    <Descriptions.Item label="照片">
                        <Image
                            width={200}
                            src={personPic}
                        />
                    </Descriptions.Item>
                </Descriptions>
                <Descriptions layout="vertical" column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                    <Descriptions.Item label="中文姓名" contentStyle={contentStyle}>{user?.name ? user?.name : '吳建穎'}</Descriptions.Item>
                    <Descriptions.Item label="英文名字" contentStyle={contentStyle}>{user?.english_name}</Descriptions.Item>
                    <Descriptions.Item label="生日" contentStyle={contentStyle}>{user?.birthday}</Descriptions.Item>
                    <Descriptions.Item label="電話" contentStyle={contentStyle}>{user?.phone}</Descriptions.Item>
                    <Descriptions.Item label="出生地" contentStyle={contentStyle}>{user?.birthplace}</Descriptions.Item>
                    <Descriptions.Item label="Email" contentStyle={contentStyle}>{user?.email}</Descriptions.Item>
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
            </> :user === null ? <Skeleton /> : <Emptydata />}
        </div>
    );
}