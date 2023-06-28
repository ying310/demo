import {HomeFilled, UserOutlined, WhatsAppOutlined, MessageOutlined } from '@ant-design/icons';
const router = [
    {pathName: '/', showSider: true, index: '1', name: 'Home', icon: HomeFilled},
    {pathName: '/person', showSider: true, index: '2', name: 'Person', icon: UserOutlined},
    {pathName: '/contact', showSider: true, index: '3', name: 'Contact', icon: WhatsAppOutlined},
    {pathName: '/message', showSider: true, index: '4', name: 'Message', icon: MessageOutlined}
];

export default router;