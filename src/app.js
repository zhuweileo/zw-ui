import Vue from 'vue'

import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'

Vue.component('zw-button', Button);
Vue.component('zw-icon', Icon);
Vue.component('zw-button-group', ButtonGroup);

new Vue({
    el:'#app',
});