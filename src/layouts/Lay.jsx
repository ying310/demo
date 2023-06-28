import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { show, hide } from 'features/collapse/collapseSlice';
import { changeColor } from 'features/color/colorSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles.scss';
import router from 'router';
import { Layout, Menu, Spin, FloatButton, ColorPicker } from 'antd';
import { SettingFilled } from '@ant-design/icons';
const { Sider } = Layout;

export default function Lay(props) {
    const { children } = props;
    const { pathname } = useLocation();
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
    const color = useSelector((state) => state.color.value);
    const dispatch = useDispatch();
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
                <FloatButton.Group
                    trigger="hover"
                    type="primary"
                    style={{ right: 50 }}
                    icon={<SettingFilled />}
                >
                    <FloatButton />
                    <FloatButton />
                    <ColorPicker value={color} onChange={(value, hex) => {dispatch(changeColor({value: hex}))}}/>
                </FloatButton.Group>
            </Spin>
        </div>
    );
};

Lay.propTypes = {
    children: PropTypes.element,
};