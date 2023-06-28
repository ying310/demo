import React from 'react';
import { Anchor } from 'antd';
import './styles.scss';
import Expertise from 'components/Expertise/Expertise';
import Interest from 'components/Interest/Interest';
import Autobiography from 'components/Autobiography/Autobiography';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();
    const items = [
        {key: 'expertise', href:'#expertise', title: '個人簡介'},
        {key: 'interest', href:'#interest', title: '興趣'},
        {key: 'autobiography', href:'#autobiography', title: '自傳'},
    ]

    return (
        <div className="home-wrapper">
            <Anchor
                className='home-anchor'
                direction="horizontal"
                items={items}
            />
            <div>
                <Expertise title={ t('Personal profile') } />
                <Interest title="興趣" />
                <Autobiography title="自傳" />
            </div>
        </div>
    );
}