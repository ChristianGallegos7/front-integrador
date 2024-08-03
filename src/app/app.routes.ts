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
        path: 'jobs',
        loadComponent: () => import('./job-listings/job-listings.component').then(c => c.JobListingsComponent)
    },
    {
        path: '**',
        redirectTo: 'auth/user/login',
        pathMatch: 'full'
    }
];
