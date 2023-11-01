import Form from '@/components/common/Form';
import FormInput from '@/components/common/FormInput';
import Loading from '@/components/common/Loading/Loading';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { storeUserInfo } from '@/service/auth.service';
import { loginFormSchema } from '@/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [login, loginOptions] = useLoginMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await login({ ...data }).unwrap();
      if (res?.accessToken) {
        message.success('User logged in successfully');
        navigate('/');
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {loginOptions.isLoading && <Loading />}
      <div className="card w-96 bg-base-100 shadow-2xl bg-gray-100">
        <div className="card-body">
          <h1 className="text-3xl text-center text-black mb-2 font-bold">
            Login
          </h1>
          <Form
            submitHandler={onSubmit}
            resolver={yupResolver(loginFormSchema)}
          >
            <div>
              <FormInput name="email" type="text" size="large" label="Email" />
            </div>
            <div
              style={{
                margin: '16px 0px',
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <Button
              className="bg-primary w-full text-lg mt-5"
              type="primary"
              htmlType="submit"
              size="large"
              loading={loginOptions?.isLoading}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
