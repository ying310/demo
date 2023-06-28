import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Input, Button, Form, Typography, Divider, message } from 'antd';
import { insertMessage } from 'apis/MessageApi';
const { Title } =Typography;

export default function Contact() {
    const [submittable, setSubmittable] = useState(false);
    const [form] = Form.useForm();
    const values = Form.useWatch([], form);
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
          () => {
            setSubmittable(true);
          },
          () => {
            setSubmittable(false);
          },
        );
      }, [form, values]);

    const onFinish = async(values) => {
        try {
            setSubmittable(false);
            if (values.name.trim() === '') {
                error('name is empty');
                return false;
            }

            const data = {
                name: values.name.trim(),
                email: values.email.trim(),
                suggest: values.suggest.trim()
            };
            const resp = await insertMessage(data);
            if (resp.success) {
                form.resetFields();
                success();
            } else {
                error(resp.errors);
            }
        } catch(err) {
            error(err);
            setSubmittable(true);
        }
    }

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Submit success',
          duration: 1.5
        });
    };

    const error = (errMsg) => {
        messageApi.open({
          type: 'error',
          content: `Error message: ${errMsg}`,
          duration: 1.5
        });
    };
    return (
        <div className='contact-wrapper'>
            {contextHolder}
            <Title>Contact</Title>
            <Form
                form={form}
                name="basic"
                layout={'vertical'}
                labelCol={{ span: 8 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    className='form-item'
                    label="Name"
                    name="name"
                    rules={[{
                        validator: (rule, value) => {
                            return value === undefined || value.trim().length === 0 ? Promise.reject('Please input your name!') : Promise.resolve();
                        }
                    }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    className='form-item'
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Format is wrong!'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="suggest" label="Suggest">
                    <Input.TextArea rows={8}/>
                </Form.Item>
                <Divider />
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={!submittable}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}