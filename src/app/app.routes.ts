import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/user/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        children: [
            {
                path: 'user',
                loadComponent: () => import('./auth/user/layout-page/layout-page.component').then(c => c.LayoutPageComponent),
                children: [
                    {
                        path: 'login',
                        loadComponent: () => import('./auth/user/login-page/login-page.component').then(c => c.LoginPageComponent)
                    },
                    {
                        path: 'register',
                        loadComponent: () => import('./auth/user/register-page/register-page.component').then(c => c.RegisterPageComponent)
                    },
                    {
                        path: '',
                        redirectTo: 'login',
                        pathMatch: 'full'
                    },
                    {
                        path: '**',
                        redirectTo: 'login',
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: 'company',
                loadComponent: () => import('./auth/company/layout-page/layout-page.component').then(c => c.LayoutPageComponent),
                children: [
                    {
                        path: 'login',
                        loadComponent: () => import('./auth/company/login-page/login-page.component').then(c => c.LoginPageComponent)
                    },
                    {
                        path: 'register',
                        loadComponent: () => import('./auth/company/register-page/register-page.component').then(c => c.RegisterPageComponent)
                    },
                    {
                        path: '',
                        redirectTo: 'login',
                        pathMatch: 'full'
                    },
                    {
                        path: '**',
                        redirectTo: 'login',
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./layouts/empleos-layout-page/empleos-layout-page.component').then(c => c.EmpleosLayoutPageComponent),
        children: [
            {
                path: 'jobs',
                loadComponent: () => import('./job-listings/job-listings.component').then(c => c.JobListingsComponent)
            },
            {
                path: 'cuenta',
                loadComponent: () => import('./cuenta/cuenta.component').then(c => c.CuentaComponent)
            },
            {
                path: '',
                redirectTo: 'jobs',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: 'jobs',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'auth/user/login',
        pathMatch: 'full'
    }
];
