import React from 'react';
import {Form, Input, Switch, Select, Button} from 'antd';
import {snakeCase} from 'lodash';

const DisplayForm = ({formData}) => (
    <Form
        name="basic"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        onFinish={values => console.log('Success:', values)}
        onFinishFailed={(errorInfo) => console.log('Failed:', errorInfo)}
    >
        {formData.map(({type, options: {key, label, items}}, i) => (
            <Form.Item
                key={`${i}_${snakeCase(key)}`}
                // name={key}
                label={label}
                rules={[{required: true, message: `Please input your ${label}!`}]}
            >
                {type === 'input' && <Input style={{maxWidth: 250}} />}
                {type === 'switch' && <Switch />}
                {type === 'select' && <Select style={{maxWidth: 250}} options={items} />}
            </Form.Item>
        ))}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
)
export default DisplayForm;
