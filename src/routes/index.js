import { authGuard } from '../auth';

const routes = [
  {
    path: '/',
    component: () => import('./../views/wrappers/Unauthenticated.vue'),
    children: [
      {
        path: 'signup',
        component: () => import('./../views/SignUp.vue'),
      },
    ],
  },
  {
    path: '/app',
    component: () => import('./../views/wrappers/Authenticated.vue'),
    beforeEnter: authGuard,
    children: [
      {
        path: '/appointments',
        component: () => import('./../views/Appointments.vue'),
        beforeEnter: authGuard,
      },
    ],
  },
];
export default routes;
