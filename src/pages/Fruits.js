import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent, getOwner } from '@glimmer/core';

import { on, action } from '@glimmer/modifier';

class Fruits extends Component {

  constructor() {
    super(...arguments);
    const { querystring } = this.args.ctx;
    const [,fruit]  = querystring.split('=');
    this.fruit = fruit;
  }

  @action
  gotoHome() {
    getOwner(this).services.router.navigate('/');
  }
}

setComponentTemplate(createTemplate({ on }, `
<h1>Fruits page</h1>
<p>Fruit name: {{this.fruit}}</p>
<button type="button" {{on "click" this.gotoHome}}>Take me to Home page</button>
 
`),Fruits);

export default Fruits;
