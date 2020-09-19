import Appointments from '@/views/Appointments.vue';
import Authenticated from '@/views/wrappers/Authenticated.vue';
import Unauthenticated from '@/views/wrappers/Unauthenticated.vue';
import SignUp from '@/views/SignUp.vue';

const routes = [
  {
    path: '/',
    component: Unauthenticated,
    children: [
      {
        path: 'signup',
        component: SignUp,
      },
    ],
  },
  { 
    path: '/dashboard',
    component: Authenticated,
    children: [
      {
        path: '/appointments',
        component: Appointments,
      },
    ],
  }
];
export default routes;