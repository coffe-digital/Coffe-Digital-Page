
import { parseCookies } from 'nookies';
import ScreenDashboardAdmin from '@/app/content/screens/dashboardAdmin';

export const getServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  const token = cookies.token;
  const userRole = cookies.userRole; 
  console.log(cookies)

  if (!token || userRole !== 'Administrador') {
    return {
      redirect: {
        destination: '/not-authorized',
        permanent: true,
      },
    };
  }

  
  return {
    props: {}, 
  };
};

const DashboardAdmin = () => {
  return <ScreenDashboardAdmin />;
};

export default DashboardAdmin;
