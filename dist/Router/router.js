import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../../src/components/Inicio'
import Contacto from '../../src/components/Contacto'
import Notfound from '../../src/components/Notfound'
import Misviajes from '../../src/components/Misviajes'
import Sobremi from '../../src/components/Sobremi'
import bolivia from '../../src/components/bolivia'
import peru from '../../src/components/peru'
import europa from '../../src/components/europa'
import chile from '../../src/components/chile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/Contacto',
    component: Contacto,
    name:'Contacto',
  },

  {
    path: '/Misviajes',
    component: Misviajes,
  },

  {
    path: '/Sobremi',
    component: Sobremi,
    name: 'Sobremi',
  },
  {
    path: '/Bolivia',
    component: bolivia,
    name: 'bolivia'
  },
  {
    path: '/Peru',
    component: peru,
    name: 'peru'
  },
  {
    path: '/eruopa',
    component: europa,
    name: 'europa'
  },
  {
    path: '/chile',
    component: chile,
    name: 'chile'
  },
  {
    path: '*',
    component: Notfound,
  },
      
]

const router = new VueRouter({
  routes
})

export default router