import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
// import { PartialRouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

//Authentication

const Login = Loader(lazy(() => import('src/content/authentication/Login')));
const ForgotPassword = Loader(
  lazy(() => import('src/content/authentication/ForgotPassword'))
);

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions'))
);
const Corridor = Loader(
  lazy(() => import('src/content/applications/Corridor'))
);
const Hotspot = Loader(lazy(() => import('src/content/applications/Hotspot')));
// const UserProfile = Loader(
//   lazy(() => import('src/content/applications/Users/profile'))
// );
// const UserSettings = Loader(
//   lazy(() => import('src/content/applications/Users/settings'))
// );

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

const routes = (isLogin) => [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
      {
        path: 'status',
        children: [
          {
            path: '/',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: isLogin ? <SidebarLayout /> : <Navigate to="/login" replace />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboards/main" replace />
      },
      {
        path: 'main',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'facade',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/facade/screensaver" replace />
      },
      {
        path: 'screensaver',
        element: <Transactions />
      },
      {
        path: 'hotspot',
        element: <Hotspot />
      }
    ]
  },
  {
    path: 'corridor',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/corridor/screensaver" replace />
      },
      {
        path: 'screensaver',
        element: <Transactions />
      },
      {
        path: 'page',
        element: <Corridor />
      }
    ]
  },
  {
    path: 'components',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/components/buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />
  }
];

export default routes;
