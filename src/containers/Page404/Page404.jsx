import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import './styles.scss';

export default function Page404() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    return (
        <>
            <div className="page404-wapper">
                <Result
                    status="404"
                    title="404"
                    subTitle="Uh Oh! Looks like Something Wrong."
                    extra={<Button type="primary" onClick={goHome}>Back Home</Button>}
                />
            </div>
        </>
    );
}