import React, { useState, useEffect } from 'react';
import { getMessage } from '../../apis/MessageApi';
import { showLoading, hideLoading } from 'features/loading/loadingSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import Emptydata from 'components/Emptydata/';
import './styles.scss';

export default function Message() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const columns = [
        {
          title: t('Name'),
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: t('Email'),
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: t('Suggest'),
          dataIndex: 'suggest',
          key: 'suggest',
        }
    ];
    useEffect(() => {
        const init = async() => {
            try {
                dispatch(showLoading());
                const res = await getMessage();
                if (res?.success) {
                    setData(res.data);
                }
                dispatch(hideLoading());
            } catch(err) {
                console.log(err);
                dispatch(hideLoading());
            }
        }
        init();
    }, [dispatch])
    return (
        <div className='message-wrapper'>
           {data.length !== 0 ? 
                <Table columns={columns} dataSource={data} size="large" /> : 
                <Emptydata />
            }
        </div>
    )
}