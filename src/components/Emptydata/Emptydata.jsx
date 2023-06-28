import React from 'react';
import { useNavigate } from "react-router-dom";
import { Empty, Button } from 'antd';

export default function Emptydata() {
    const navidate = useNavigate();

    const refresh = () => {
        navidate(0);
    }
    return (
        <Empty description={'沒有資料'} >
            <Button type="primary" onClick={refresh}>重新整理</Button>
        </Empty>
    )
}