import React from 'react';
import './styles.scss';
import { Layout, Row, Col, Divider, Avatar, Typography, Timeline, Tree, Tag } from 'antd';
import photo from 'assets/images/photo.jpg';
import skillJson from 'data/skills.json';
import { useTranslation } from 'react-i18next';
const { Content } = Layout;
const { Title } = Typography;


export default function Expertise(props) {
    const skills = JSON.parse(JSON.stringify(skillJson.data));
    skills.forEach((skill) => {
        skill.children.forEach((child) => {
            child.title = <Tag color={child.color} className='tag'>{child.title}</Tag>;
        });
    });
    const { t } = useTranslation();
    const title = props.title;
    return (
        <div id="expertise" className="expertise-wrapper">
            <Content>
                <Title className='title'>{title}</Title>
                <Row>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} style={{padding: '10px'}}>
                        <Avatar size={{ xs: 150, sm: 150, md: 150, lg: 180, xl: 180, xxl: 200 }} src={photo} />
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={16} xl={16} className='col' style={{padding: '10px'}}>
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
                        <div className='content'>
                            個人特質屬於樂於學習、積極努力且肯負責
                        </div>
                    </Col>
                </Row>
                <Divider orientation="left" className='divider-title'>{t('Skills')}</Divider>
                <Row>
                    {skills.map(data => {
                        return (<Col key={data.key} xs={24} sm={12} md={12} lg={8} xl={4}>
                            <Tree treeData={[data]} defaultExpandAll rootStyle={{background: 'transparent'}} />
                        </Col>)
                    })}
                </Row>
                <Divider orientation="left" className='divider-title'>{t('Time')}</Divider>
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
                                children: '進入元智大學擔任技術人員',
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