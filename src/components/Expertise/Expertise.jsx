import React from 'react';
import './styles.scss';
import { Layout, Row, Col, Divider, Avatar, Tag, Typography, Timeline, Tree } from 'antd';
import photo from 'assets/images/photo.jpg';
const { Content } = Layout;
const { Title } = Typography;

export default function Expertise(props) {
    const title = props.title;
    const treeData = [
        {
          title: <span style={{fontWeight: 'bold'}}>Backend</span>,
          key: '0-0',
          children: [
            {
              title: <Tag color="processing" className='tag'>PHP</Tag>,
              key: '0-0-0',
            },
            {
              title: <Tag color="processing" className='tag'>Node.js</Tag>,
              key: '0-0-1',
            },
            {
                title: <Tag color="processing" className='tag'>Python</Tag>,
                key: '0-0-2',
            },
            {
                title: <Tag color="processing" className='tag'>Android/java</Tag>,
                key: '0-0-3',
            },
          ],
        }
    ];

    const treeData3 = [{
        title: <span style={{fontWeight: 'bold'}}>Fontend</span>,
        key: '0-1',
        children: [
            {
                title: <Tag color="magenta" className='tag'>HTML</Tag>,
                key: '0-1-0',
            },
            {
                title: <Tag color="magenta" className='tag'>CSS</Tag>,
                key: '0-1-1',
            },
            {
                title: <Tag color="magenta" className='tag'>Javascript</Tag>,
                key: '0-1-2',
            },
            {
                title: <Tag color="magenta" className='tag'>React</Tag>,
                key: '0-1-3',
            },
            {
                title: <Tag color="magenta" className='tag'>Angular</Tag>,
                key: '0-1-4',
            },
        ],
    }];

    const treeData2 = [
        {
          title: <span style={{fontWeight: 'bold'}}>Other</span>,
          key: '0-0',
          children: [
            {
              title: <Tag color="success" className='tag'>MySQL</Tag>,
              key: '0-0-0',
            },
            {
              title: <Tag color="success" className='tag'>MongoDB</Tag>,
              key: '0-0-1',
            },
            {
                title: <Tag color="gold" className='tag'>git</Tag>,
                key: '0-0-2',
            },
            {
                title: <Tag color="orange" className='tag'>Ubuntu</Tag>,
                key: '0-0-3',
            },
            {
                title: <Tag color="orange" className='tag'>Windows</Tag>,
                key: '0-0-4',
            },
          ],
        }
    ];
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
                <Divider orientation="left" className='title'>Skills</Divider>
                <Row>
                    <Col xs={24} sm={12} md={12} lg={8} xl={4}>
                        <Tree treeData={treeData} defaultExpandAll rootStyle={{background: 'transparent'}} />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={4}>
                        <Tree treeData={treeData3} defaultExpandAll rootStyle={{background: 'transparent'}} />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={4}>
                        <Tree treeData={treeData2} defaultExpandAll rootStyle={{background: 'transparent'}} />
                    </Col>
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