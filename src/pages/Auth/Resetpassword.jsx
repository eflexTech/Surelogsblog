import './onboarding.css'
import { Button, Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';



const  ResetPassword = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const nav = useNavigate()
  return (
    <div className='forgot-password'>
      <h1>Surelogs Blog</h1>
      <div className="forgotpassword-wrapper">
        <h3>Reset your password</h3>
        <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
        width:450
      }}
      onFinish={onFinish}
    >
      <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input new Password!',
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined/>} type="password" placeholder="Enter new password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: 'Please confirm Password!',
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined/>} type="password" placeholder="Confirm your password" />
            </Form.Item>
      <Form.Item>
        <Button block color='cyan' variant="solid" htmlType="submit">
          Reset password
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}

export default ResetPassword