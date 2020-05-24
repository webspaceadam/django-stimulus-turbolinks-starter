import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';
import Turbolinks from 'turbolinks';

// import css
import './../css/index.css'

const application = Application.start();
const context = require.context('./controllers', true, /\.js$/);
application.load(definitionsFromContext(context));
Turbolinks.start();