import React from 'react';
import { Anchor } from 'antd';
import './styles.scss';
import Expertise from 'components/Expertise/Expertise';
import Interest from 'components/Interest/Interest';
import Personality from 'components/Personality/Personality';

export default function Home() {
    const items = [
        {key: 'expertise', href:'#expertise', title: '個人簡介'},
        {key: 'interest', href:'#interest', title: '興趣'},
        {key: 'personality', href:'#personality', title: '個性'},
    ]

    return (
        <>
            <div className="home-wrapper">
                <Anchor
                    className='home-anchor'
                    direction="horizontal"
                    items={items}
                />
                <div>
                    <Expertise title="個人簡介" />
                    <Interest title="興趣" />
                    <Personality title="個性" />
                </div>
            </div>
        </>
    );
}