import type { FormProps } from 'antd';
import { Button, Flex, Form, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import { Link, useNavigate } from 'react-router-dom';
import { CPATH } from '../../constants/path';
import './styles.scss';

type FieldType = {
  username?: string;
  password?: string;
  phone?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Flex className='page-signin' justify="center" align="center">
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
        <Title level={3} style={{ textAlign: 'center' }} >Sign In</Title>

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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>

        <div className="signup">
          <span>
            Don't have an account?
            <Link to={CPATH.SIGNUP} style={{ marginLeft: '0.5rem' }} >Sign Up</Link>
          </span>
        </div>
      </Form>
    </Flex>

  )
}

export default SignIn