import React from 'react';
import './styles.scss';
import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

export default function Personality(props) {
    const title = props.title;
    return (
        <div id='personality' className='personality-wrapper'>
            <Content>
                <Title className='title'>{title}</Title>
            </Content>
        </div>
    );
}