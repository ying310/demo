import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { show, hide} from 'features/collapse/collapseSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles.scss';
import router from 'router';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

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
    const dispatch = useDispatch()
    return (
        <div className="main">
            <Layout>
                {obj?.showSider && <Sider
                    style={{position: 'fixed', height: '100%', top: 0}}
                    breakpoint="lg"
                    collapsedWidth="0"
                    collapsible="true"
                    onBreakpoint={(broken) => {
                        // console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        // console.log(collapsed, type);
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
                        items={router.map((o, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(o?.icon),
                            label: o?.name,
                            }),
                        )}
                    />
                </Sider>}
                <Layout className='layout-margin' style={{marginLeft: collapse ? '0' : '200px'}}>
                    {children}
                </Layout>
            </Layout>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.element,
};