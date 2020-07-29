import loginComonent from './../login/login'
import MainPage from './../pages/mainPage/mainPage'
const RouterList = [
  {
    path: '/login',
    component: loginComonent,
    key: 'login',
  },
  {
    path: '*',
    component: MainPage,
    key: 'MainPage'
  }
]

export default RouterList