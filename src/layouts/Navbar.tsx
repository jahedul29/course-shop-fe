import { authKey } from '@/constants/storageKey';
import { useGetUserDetailsQuery } from '@/redux/features/auth/authApi';
import { getUserInfo } from '@/service/auth.service';
import { message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user: any = getUserInfo();
  const navigate = useNavigate();

  const { data, isLoading } = useGetUserDetailsQuery(user?.userId, {
    refetchOnMountOrArgChange: true,
    skip: !user?.userId,
  });

  const handleLogout = () => {
    message.destroy();
    localStorage.removeItem(authKey);
    navigate('/');
  };

  return (
    <div className="navbar bg-base-100 text-white bg-primary">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            Course Shop
          </Link>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1 ">
            {user ? (
              <li>
                <details>
                  <summary>{data?.name}</summary>
                  <ul className="p-2 bg-primary">
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <a>Details</a>
                    </li>
                    <li className="cursor-pointer" onClick={handleLogout}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </details>
              </li>
            ) : (
              <li>
                <Link
                  to={'/login'}
                  className="rounded-md text-xl font-semibold !text-white flex items-center justify-center cursor-pointer ml-auto transition-all duration-500 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
