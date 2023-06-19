import React, { useState } from 'react';
import { Anchor } from 'antd';
import './styles.scss';
import Expertise from 'components/Expertise/Expertise';

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
                    <Expertise />
                    <div
                        id="interest"
                        style={{
                        width: '100%',
                        height: '100vh',
                        textAlign: 'center',
                        background: 'rgba(0,0,255,0.02)',
                        }}
                    />
                    <div
                        id="personality"
                        style={{ width: '100%', height: '100vh', textAlign: 'center', background: '#FFFBE9' }}
                    />
                </div>
            </div>
        </>
    );
}