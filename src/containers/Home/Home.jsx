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
        {key: 'expertise', href:'#expertise', title: t('Personal profile')},
        {key: 'interest', href:'#interest', title: t('Interest')},
        {key: 'autobiography', href:'#autobiography', title: t('Autobiography')},
    ]

    return (
        <div className="home-wrapper">
            <Anchor
                className='home-anchor'
                direction="horizontal"
                items={items}
            />
            <div>
                <Expertise title={t('Personal profile')} />
                <Interest title={t('Interest')} />
                <Autobiography title={t('Autobiography')} />
            </div>
        </div>
    );
}