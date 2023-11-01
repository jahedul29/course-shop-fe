import FormSelectField from '@/components/common/CustomSelect';
import Form from '@/components/common/Form';
import FormInput from '@/components/common/FormInput';
import Loading from '@/components/common/Loading';
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import { loginFormSchema } from '@/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [register, registerOptions] = useRegisterMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await register({ ...data }).unwrap();
      if (res?.error) {
        message.error(res.error.data);
        return;
      }
      message.success('User registered successfully');
      navigate('/login');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {registerOptions.isLoading && <Loading />}
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
              <FormInput name="name" type="text" size="large" label="Name" />
            </div>
            <div
              style={{
                margin: '16px 0px',
              }}
            >
              <FormSelectField
                name="role"
                label="Role"
                size="large"
                options={[
                  {
                    label: 'Admin',
                    value: 'ADMIN',
                  },
                  {
                    label: 'Student',
                    value: 'STUDENT',
                  },
                ]}
                placeholder="Select"
              />
            </div>
            <div
              style={{
                margin: '16px 0px',
              }}
            >
              <FormInput name="email" type="email" size="large" label="Email" />
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
              loading={registerOptions?.isLoading}
            >
              Register
            </Button>
            <Link
              className="border-2 border-primary hover:bg-primary hover:text-white duration-300 transition-all w-full text-lg mt-5 text-black flex items-center justify-center rounded-md py-1 text-base"
              to="/login"
            >
              Login
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
