import { Link, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Layout from '../layouts/Layout';
import { lazy, Suspense } from 'react';
import CircularPageLoading from '../ui/Loading/CircularPageLoading';
const Home = lazy(() => import('../app/pages/home'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<CircularPageLoading />}>
      <Routes>
        <Route
          path={routes.base}
          element={
            <div>
              This is the generated root route.{' '}
              <Link to={routes.home}>Click here for home.</Link>
            </div>
          }
        />
        <Route element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
