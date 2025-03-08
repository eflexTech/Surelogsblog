import './onboarding.css'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Logo.png"


const SignUp = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const nav = useNavigate()
  return (
    <div className='login'>
      <div className="login-leftside">
        <img src="https://www.fadded-socials.com/assets/assets2/images/authentication/img-auth-sideimg.jpg"/>
      </div>
      <div className="login-rightside">
        <div className="login-wrapper">
        <img src={Logo} alt="Surelogs Blog" onClick={()=>nav('/')}/>
        {/* <h3 onClick={()=>nav('/')}>Surelogs Blog</h3> */}
        <h6>Sign up Your Account</h6>
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
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username',
          },
        ]}
      >
        <Input prefix={<UserOutlined/>} placeholder="Enter username" />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Email Address!',
          },
        ]}
      >
        <Input prefix={<MailOutlined/>} placeholder="Enter your email Address" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined/>} type="password" placeholder="Enter password" />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined/>} type="password" placeholder="Confirm your password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>I agree to all the Terms & Condition</Checkbox>
          </Form.Item>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block color='cyan' variant="solid" htmlType="submit">
          Sign up
        </Button>
        or <a onClick={()=>nav('/login')}>login</a>
      </Form.Item>
    </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUp