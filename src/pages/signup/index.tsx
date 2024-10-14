import type { FormProps } from 'antd';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import { Link, useNavigate } from 'react-router-dom';
import { CPATH } from '../../constants/path';
import './styles.scss'

type FieldType = {
    fisrtName?: string,
    lastName?: string,
    phone?: string,
    password?: string,
    confirmPassword?: string,
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const SignUp = () => {
    return (
        <Flex className='page-signin' justify="center" align="center" >
            <Form
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 600, rowGap: '1rem' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Title level={3} style={{ textAlign: 'center' }} >Sign Up</Title>

                <Form.Item<FieldType>
                    label="First Name"
                    name="fisrtName"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please input your confirm password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>

                <div className="signup">
                    <span>
                        Don't have an account?
                        <Link to={CPATH.SIGNIN} style={{ marginLeft: '0.5rem' }} >Sign In</Link>
                    </span>
                </div>
            </Form>
        </Flex>
    )
}

export default SignUp