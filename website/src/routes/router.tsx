import { Loader } from 'uiw';
import dynamic from 'react-dynamic-loadable';
import { store } from '../models';


function Loading() {
  return <Loader color="#333" tip="页面加载中..." />
}

// wrapper of dynamic
const dynamicWrapper = (models: string[], component: () => Promise<any>) =>
  dynamic({
    models: () =>
      models.map((m: string) => {
        return import(`../models/${m}.ts`).then((md) => {
          const modelData = md.default || md;
          store.addModel({ name: m, ...modelData });
        });
      }),
    component,
    LoadingComponent: Loading,
  });

export type RouterData = typeof getRouterData;

export const getRouterData = {
  '/': {
    component: dynamicWrapper([], () => import('../layouts/BasicLayout')),
  },
  '/home': {
    component: dynamicWrapper([], () => import('../pages/home')),
  },
  '/team': {
    component: dynamicWrapper([], () => import('../pages/team')),
  },
  '/docs': {
    component: dynamicWrapper([], () => import('../pages/docs')),
  },
  '/docs/environment-setup': {
    component: dynamicWrapper([], () => import('../pages/docs/environment-setup')),
  },
  '/docs/environment-setup/ios': {
    component: dynamicWrapper([], () => import('../pages/docs/environment-setup/ios')),
  },
  '/docs/environment-setup/android': {
    component: dynamicWrapper([], () => import('../pages/docs/environment-setup/android')),
  },
  '/docs/getting-started': {
    component: dynamicWrapper([], () => import('../pages/docs/getting-started')),
  },
  // '/components': {
  //   component: dynamicWrapper([], () => import('../layouts/ComponentsLayout')),
  // },
  '/components/about': {
    component: dynamicWrapper([], () => import('../pages/components/about')),
  },
  '/components/divider': {
    component: dynamicWrapper([], () => import('../pages/components/divider')),
  },
  '/components/flex': {
    component: dynamicWrapper([], () => import('../pages/components/flex')),
  },
  '/components/spacing': {
    component: dynamicWrapper([], () => import('../pages/components/spacing')),
  },
  '/components/winblank': {
    component: dynamicWrapper([], () => import('../pages/components/winblank')),
  },
  '/components/drawer': {
    component: dynamicWrapper([], () => import('../pages/components/drawer')),
  },
  '/components/menudropdown': {
    component: dynamicWrapper([], () => import('../pages/components/menudropdown')),
  },
  '/components/swipeaction': {
    component: dynamicWrapper([], () => import('../pages/components/swipeaction')),
  },
  '/components/button': {
    component: dynamicWrapper([], () => import('../pages/components/button')),
  },
  '/components/buttongroup': {
    component: dynamicWrapper([], () => import('../pages/components/buttongroup')),
  },
  '/components/checkbox': {
    component: dynamicWrapper([], () => import('../pages/components/checkbox')),
  },
  '/components/input': {
    component: dynamicWrapper([], () => import('../pages/components/input')),
  },
  '/components/radio': {
    component: dynamicWrapper([], () => import('../pages/components/radio')),
  },
  '/components/segmentedcontrol': {
    component: dynamicWrapper([], () => import('../pages/components/segmentedcontrol')),
  },
  '/components/slider': {
    component: dynamicWrapper([], () => import('../pages/components/slider')),
  },
  '/components/switch': {
    component: dynamicWrapper([], () => import('../pages/components/switch')),
  },
  '/components/searchbar': {
    component: dynamicWrapper([], () => import('../pages/components/searchbar')),
  },
  '/components/selectcascader': {
    component: dynamicWrapper([], () => import('../pages/components/selectcascader')),
  },
  '/components/avatar': {
    component: dynamicWrapper([], () => import('../pages/components/avatar')),
  },
  '/components/badge': {
    component: dynamicWrapper([], () => import('../pages/components/badge')),
  },
  '/components/ellipsis': {
    component: dynamicWrapper([], () => import('../pages/components/ellipsis')),
  },
  '/components/empty': {
    component: dynamicWrapper([], () => import('../pages/components/empty')),
  },
  '/components/grid': {
    component: dynamicWrapper([], () => import('../pages/components/grid')),
  },
  '/components/icon': {
    component: dynamicWrapper([], () => import('../pages/components/icon')),
  },
  '/components/list': {
    component: dynamicWrapper([], () => import('../pages/components/list')),
  },
  '/components/typography': {
    component: dynamicWrapper([], () => import('../pages/components/typography')),
  },
  '/components/loader': {
    component: dynamicWrapper([], () => import('../pages/components/loader')),
  },
  '/components/modal': {
    component: dynamicWrapper([], () => import('../pages/components/modal')),
  },
  '/components/masklayer': {
    component: dynamicWrapper([], () => import('../pages/components/masklayer')),
  },
  '/components/result': {
    component: dynamicWrapper([], () => import('../pages/components/result')),
  },
  '/components/toast': {
    component: dynamicWrapper([], () => import('../pages/components/toast')),
  },
};
