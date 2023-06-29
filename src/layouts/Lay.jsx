import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { show, hide } from 'features/collapse/collapseSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles.scss';
import router from 'router';
import { Layout, Menu, Spin, FloatButton } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import i18n from 'i18n';
const { Sider } = Layout;

export default function Lay(props) {
    const { children } = props;
    const { pathname } = useLocation();
    const [lang, setLang] = useState(localStorage.getItem("locales") ? localStorage.getItem("locales") : 'en');
    const navigate = useNavigate();
    const obj = router.find(o => o.pathName === pathname);
    const onClick = (e) => {
        router.forEach(o => {
            if (parseInt(e.key) === parseInt(o.index)) {
                navigate(o?.pathName);
            }
        });
    };
    const collapse = useSelector((state) => state.collapse.value);
    const loading = useSelector((state) => state.loading.value);
    const dispatch = useDispatch();

    const changeLang = () => {
        const lag = lang === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(lag);
        setLang(lag);
        localStorage.setItem("locales", lag);
    }

    return (
        <div className="main">
            <Spin tip="Loading..." spinning={loading} size="large" wrapperClassName="spin"  style={{height: '100%', maxHeight: '100%'}}>
                <Layout className='layout'>
                    {obj?.showSider && <Sider
                        style={{position: 'fixed', height: '100%', top: 0}}
                        breakpoint="lg"
                        collapsedWidth="0"
                        onCollapse={(collapsed) => {
                            if (collapsed) {
                                dispatch(hide())
                            } else {
                                dispatch(show())
                            }
                        }}
                    >
                        <Menu
                            theme="dark"
                            mode="inline"
                            onClick={onClick}
                            defaultSelectedKeys={[obj?.index]}
                            selectedKeys={[obj?.index]}
                            items={router.map((o, index) => ({
                                key: String(index + 1),
                                icon: React.createElement(o?.icon),
                                label: o?.name,
                                }),
                            )}
                        />
                    </Sider>}
                    <Layout className='layout-margin' style={{marginLeft: !obj?.showSider || collapse ? '0' : '200px'}}>
                        {children}
                    </Layout>
                </Layout>
                <FloatButton
                    type={lang === 'zh' ? 'primary' : 'default'}
                    style={{ right: 50 }}
                    onClick={changeLang}
                    icon={<TranslationOutlined />}
                />
            </Spin>
        </div>
    );
};

Lay.propTypes = {
    children: PropTypes.element,
};