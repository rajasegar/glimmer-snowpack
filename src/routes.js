import { renderComponent } from '@glimmer/core';
import page from 'page';
import LocaleService from './services/LocaleService.js';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

export default function(element) {

  page('/', () => {
    element.innerHTML = '';
    renderComponent(Home, {
      element: element,
      owner: {
        services: {
          locale: new LocaleService('en_US'),
        },
      }
    });
  });
  page('/about', () => {
    element.innerHTML = '';
    renderComponent(About, element);
  });
  page('/contact', () => {
    element.innerHTML = '';
    renderComponent(Contact, element);
  });

  page();
  
}


