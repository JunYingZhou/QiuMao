import { avatarRouter } from '@/app/avatar/router';
import { hispitoryRouter } from '@/app/hispitory/router';
import type { Router } from 'vue-router';

let router = {} as Router;
const { VITE_PROJECT } = import.meta.env;
if (VITE_PROJECT === 'avatar') router = avatarRouter;
if (VITE_PROJECT === 'hispitory') router = hispitoryRouter;

export default router;
