import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import addressBook from '@/components/addressBook'
import find from  '@/components/find'
import me from  '@/components/me'
import weChatIndex from '@/components/wechatIndex'

import elementIndex from '@/components/ele/elementIndex'
import eleHome from '@/components/ele/eleHome'
import myOrder from '@/components/ele/myOrder'
import theGold from '@/components/ele/subMenu/theGold'
import theAccountBalance from '@/components/ele/subMenu/theAccountBalance'
import theAddressManagement from '@/components/ele/subMenu/theAddressManagement'
import theMyCenter from '@/components/ele/subMenu/theMyCenter'
import theMyCollection from '@/components/ele/subMenu/theMyCollection'
import theOrder from '@/components/ele/subMenu/theOrder'
import thePersonalInformation from '@/components/ele/subMenu/thePersonalInformation'
import theRedEnvelope from '@/components/ele/subMenu/theRedEnvelope'

import vitaIndex from '@/components/vita/vitaIndex'
import isMe from '@/components/vita/isMe'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/weChatIndex',
      name: 'weChatIndex',
      component: weChatIndex,
      children:[
        {
        path: '/home',
        name: 'home',
        component: home
      },
        {
          path: '/addressBook',
          name: 'addressBook',
          component: addressBook
        },
        {
          path: '/find',
          name: 'find',
          component: find
        },
        {
          path: '/me',
          name: 'me',
          component: me
        },
      ]
    },
    {
      path: '/elementIndex',
      name: 'elementIndex',
      component: elementIndex,
      children:[
        {
          path: '/eleHome',
          name: 'eleHome',
          component: eleHome
        },
        {
          path: '/myOrder',
          name: 'myOrder',
          component: myOrder,
          redirect: '/myOrder/theOrder',
          children:[
            {
              path: 'theGold',
              name: 'theGold',
              component: theGold
            },
            {
              path: 'theAccountBalance',
              name: 'theAccountBalance',
              component: theAccountBalance
            },
            {
              path: 'theAddressManagement',
              name: 'theAddressManagement',
              component: theAddressManagement
            },
            {
              path: 'theMyCenter',
              name: 'theMyCenter',
              component: theMyCenter
            },
            {
              path: 'theMyCollection',
              name: 'theMyCollection',
              component: theMyCollection
            },
            {
              path: 'theOrder',
              name: 'theOrder',
              component: theOrder
            },
            {
              path: 'thePersonalInformation',
              name: 'thePersonalInformation',
              component: thePersonalInformation
            },
            {
              path: 'theRedEnvelope',
              name: 'theRedEnvelope',
              component: theRedEnvelope
            },
          ]
        },
      ]
    },
    {
      path: '/vitaIndex',
      name: 'vitaIndex',
      component: vitaIndex,
      children:[
        {
          path: '/isMe',
          name: 'isMe',
          component: isMe,
        }
      ]
    }
  ]
})
