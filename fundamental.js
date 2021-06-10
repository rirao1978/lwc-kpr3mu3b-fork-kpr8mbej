import { LightningElement } from "lwc";
import {getUsers} from './util.js';

const columns = [
    { label: 'Name', fieldName: 'name', type: 'text' },
    { label: 'Age', fieldName: 'age', type: 'text' },
    { label: 'City', fieldName: 'city', type: 'text' },
];

export default class App extends LightningElement {
    columns = columns;
    users = [];
    showMsg = false;
    
    async connectedCallback(){
      const data = await getUsers();
      this.users = data;
    }
    
    showText(){
      this.showMsg = !this.showMsg;
      let buttonLabel = this.template.querySelector('lightning-button').label;
      if(buttonLabel === 'show text'){
        this.template.querySelector('lightning-button').label = 'hide text';
      } else {
        this.template.querySelector('lightning-button').label = 'show text';
      }
    }
}
