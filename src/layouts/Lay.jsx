import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { show, hide } from 'store/collapse/collapseSlice';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';
import router from 'router';
import { Layout, Menu, Spin, FloatButton, ConfigProvider } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import i18n from 'i18n';
import enUS from 'antd/locale/en_US';
import zhTW from 'antd/locale/zh_TW';
const { Sider } = Layout;

export default function Lay(props) {
    const { children } = props;
    const { pathname } = useLocation();
    const [lang, setLang] = useState(localStorage.getItem("locales") ? localStorage.getItem("locales") : 'en');
    const obj = router.find(o => o.pathName === pathname);
    
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
            <ConfigProvider locale={lang === 'zh' ? zhTW : enUS}>
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
                                defaultSelectedKeys={[obj?.index]}
                                selectedKeys={[obj?.index]}
                                items={router.map((o, index) => ({
                                    key: String(index + 1),
                                    icon: React.createElement(o?.icon),
                                    label: <Link to={o?.pathName}>{o?.name}</Link>,
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
            </ConfigProvider>
        </div>
    );
};

Lay.propTypes = {
    children: PropTypes.element,
};