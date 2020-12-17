import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
  getOwner
} from '@glimmer/core';

import { on, action } from '@glimmer/modifier';
import { Router } from './GlimmerRouter.js';

import './App.css';
import logo from './logo.svg';


class App extends Component {
  logo = logo;
}



setComponentTemplate(
  createTemplate(
    { Router },
    `
      <img src={{this.logo}} width="128"/>
      <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </nav>
      <Router/>
    `
  ),
  App
);

export default App;
