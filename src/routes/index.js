import About from './About'
import Home from './Home'
import Daily from './Daily'
import ImageDetail from './ImageDetail'
import NotFound from './NotFound'
import { createWebHashHistory , createRouter} from 'vue-router'

export default createRouter({
  history : createWebHashHistory(),
  scrollBehavior() {
    return {top:0}
  },
  routes : [
    {
      path : '/',
      component: Home
    },
    {
      path : '/about',
      component :About
    },
    {
      path : '/daily',
      component : Daily
    },
    {
      path : '/imagedetail/:id',
      component : ImageDetail
    },
    {
      path : '/:notfound(.*)',
      component : NotFound
    }
  ]
})