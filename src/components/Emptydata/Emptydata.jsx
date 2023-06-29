import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Empty, Button } from 'antd';

export default function Emptydata() {
    const { t } = useTranslation();
    const navidate = useNavigate();

    const refresh = () => {
        navidate(0);
    }
    return (
        <Empty description={t('Empty data')} >
            <Button type="primary" onClick={refresh}>{t('Refresh')}</Button>
        </Empty>
    )
}