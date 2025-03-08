import './onboarding.css'
import { LockOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Logo.png"

const Login = () => {
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
        {/* <h3>Surelogs Blog</h3> */}
        <h6>Login Your Account</h6>
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
            message: 'Please input your Username or Email Address!',
          },
        ]}
      >
        <Input placeholder="username / Email Address" />
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
        <Input.Password prefix={<LockOutlined/>} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a onClick={()=>nav('/forgot-password')}>Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block color='cyan' variant="solid" htmlType="submit">
          Log in
        </Button>
        or <a onClick={()=>nav('/signup')}>Register now!</a>
      </Form.Item>
    </Form>
        </div>
      </div>
    </div>
  )
}

export default Login