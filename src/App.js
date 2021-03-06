import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import connect from 'redux-connect-decorator';
import Router from './components/router';
import Loading from './components/loading';
import store from './store/index';
import ThemeContext from './contexts/theme';
import { themes } from './constants/styleGuide';

@connect(state => ({
  settings: state.settings,
}), {})
class ThemedApp extends React.Component {
  render() {
    const { theme } = this.props.settings;

    return (
      <ThemeContext.Provider value={theme}>
        <Fragment>
          <StatusBar barStyle={theme === themes.light ? 'dark-content' : 'light-content'} />
          <Loading />
          <Router />
        </Fragment>
      </ThemeContext.Provider>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <ThemedApp />
  </Provider>
);

export default App;
