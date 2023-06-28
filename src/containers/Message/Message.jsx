import React, { useState, useEffect } from 'react';
import { getMessage } from '../../apis/MessageApi';
import { showLoading, hideLoading } from 'features/loading/loadingSlice';
import { useSelector, useDispatch } from 'react-redux'
import { Table } from 'antd';
import Emptydata from 'components/Emptydata/';
import './styles.scss';

export default function Message() {
    const dispatch = useDispatch();
    const color = useSelector((state) => state.color.value);
    const [data, setData] = useState([]);
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Suggest',
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
        <div className='message-wrapper' style={{backgroundColor: color}}>
           {data.length !== 0 ? 
                <Table columns={columns} dataSource={data} size="large" /> : 
                <Emptydata />
            }
        </div>
    )
}