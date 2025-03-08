import './onboarding.css'
import { Button, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';



const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const nav = useNavigate()
  return (
    <div className='forgot-password'>
      <h1>Surelogs Blog</h1>
      <div className="forgotpassword-wrapper">
        <h3>Forgot password?</h3>
        <p>Enter your user account's verified email address</p>
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
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email Address!',
          },
        ]}
      >
        <Input prefix={<MailOutlined/>} placeholder="Enter your email Address" />
      </Form.Item>
      <Form.Item>
        <Button block color='primary' variant="solid" htmlType="submit">
          Submit
        </Button>
        or <a onClick={()=>nav('/login')}>Login</a>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}

export default ForgotPassword