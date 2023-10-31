import hypernova from 'hypernova/server';
import { renderVue } from '@techflexers/hypernova-vue-3';
import express from 'express';
import path from 'path';
import './style.css';

import CartView from './components/CartView.vue';

hypernova({
  devMode: true,
  getComponent(name: string, context: any) {
    return renderVue(name, CartView);
  },
  port: 3030,
  endpoint: '/components/cart/batch',

  createApplication() {
    const app = express();

    app.use(
      '/components/cart',
      express.static(path.join(process.cwd(), 'dist'))
    );
    app.use('/health_check', (req, res) => {
      res.send('ok');
    });

    return app;
  },
});
