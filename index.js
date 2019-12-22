/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Routers from './src/components/router';
import login from './src/login/containers/loginContainer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routers);
