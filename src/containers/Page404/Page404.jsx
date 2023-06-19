import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './styles.scss';

export default function Page404() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    return (
        <>
            <div className="page404-wapper">
                <div className="title">404</div>
                <div className="subtitle">Uh Oh! Looks like Something Wrong.</div>
                <Button type="primary" onClick={() => goHome()}>
                    Take me back
                </Button>
                <div className="bottom">
                    <div className="version">1.0.0</div>
                </div>
            </div>
        </>
    );
}