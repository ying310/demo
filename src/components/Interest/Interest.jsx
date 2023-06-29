import React from 'react';
import './styles.scss';
import { Typography, Layout, Row, Col, Card } from 'antd';
import exercisePic from 'assets/images/exercise.png';
import funPic from 'assets/images/fun.png';
import gamePic from 'assets/images/game.png';
import otherPic from 'assets/images/other.png';
import { useTranslation } from 'react-i18next';
const { Title } = Typography;
const { Content } = Layout;
const { Meta } = Card;


export default function Interest(props) {
    const { t } = useTranslation();
    const title = props.title;
    return (
        <div id="interest" className="interest-wrapper">
            <Content>
                <Title className='title'>{title}</Title>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card bordered={true} className='card' 
                            cover={<img
                                alt="exercise"
                                src={exercisePic}
                                />}
                            >
                            <Meta title={t('Sport')} />
                            <p>排球</p>
                            <p>籃球</p>
                            <p>羽球</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card bordered={true} className='card' 
                            cover={<img
                                alt="fun"
                                src={funPic}
                                />}
                            >
                            <Meta title={t('Leisure')}/>
                            <p>桌遊</p>
                            <p>踏青</p>
                            <p>聽音樂</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card bordered={true} className='card' 
                            cover={<img
                                alt="game"
                                src={gamePic}
                                />}
                            >
                            <Meta title={t('Game')}/>
                            <p>LOL</p>
                            <p>傳說對決</p>
                            <p>跑跑卡丁車</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card bordered={true} className='card' 
                            cover={<img
                                alt="other"
                                src={otherPic}
                                />}
                            >
                            <Meta title={t('Other')}/>
                            <p>程式</p>
                            <p>研究新東西</p>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </div>
    );
}