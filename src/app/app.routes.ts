import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Home } from './pages/home/home';
import { Category } from './pages/category/category';
import { Blog } from './pages/blog/blog';
import { Review } from './pages/review/review';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { BusinessForm } from './pages/for_business/pages/business-form/business-form';
import { BusinessLogin } from './pages/for_business/pages/business-login/business-login';
import { BusinessPage } from './pages/for_business/pages/business-page/business-page';
import { BusinessSignup } from './pages/for_business/pages/business-signup/business-signup';
import { Header } from './pages/for_business/pages/header/header';
import { Main } from './pages/for_business/pages/main/main';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
        
    },
    {
        path:'',
        component:Layout,
        children:[
            {
                path:'home',
                component:Home
            },
            {
                path:'category',
                component:Category
            },
            {
                path:'review',
                component:Review
            },
            {
                path:'login',
                component:Login
            },
            {
                path:'signup',
                component:Signup
            },
            {
                path:'blog',
                component:Blog
            }
        ]
    },
    // routes for business 
    {
        path:'business',
        component:Header,
        children:[
            {
                path:'',
                component:Main
            },
            {
                path:'login',
                component:BusinessLogin
            },
            {
                path:'signup',
                component:BusinessSignup
            },
            {
                path:'business-form',
                component:BusinessForm
            },
            {
                path:'business-page',
                component:BusinessPage
            }

        ]
    }
];
