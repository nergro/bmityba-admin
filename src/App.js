import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from 'Providers/dataProvider';
import authProvider from 'Providers/authProvider';
import Dashboard from 'pages/Dashboard';
import { Route } from 'react-router-dom';
import { Home, ThumbUp, Email, Euro, HelpOutline } from '@material-ui/icons';

import { benefit, newsletter, profile, service, question } from './pages';

import Login from 'pages/Login';
import MyLayout from 'Components/Layout/MyLayout';

const App = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={Login}
      dashboard={Dashboard}
      customRoutes={[
        <Route key="change-password" path="/change-password" component={profile.Edit} />,
      ]}
      appLayout={MyLayout}
    >
      {() => [
        <Resource name="profile" icon={Home} show={profile.Show} edit={profile.Edit} />,
        <Resource
          name="benefit"
          icon={ThumbUp}
          list={benefit.List}
          show={benefit.Show}
          edit={benefit.Edit}
          create={benefit.Create}
        />,
        <Resource
          name="service"
          icon={Euro}
          list={service.List}
          show={service.Show}
          edit={service.Edit}
          create={service.Create}
        />,
        <Resource
          name="question"
          icon={HelpOutline}
          list={question.List}
          show={question.Show}
          edit={question.Edit}
          create={question.Create}
        />,
        <Resource
          name="newsletter"
          icon={Email}
          list={newsletter.List}
          show={newsletter.Show}
          create={newsletter.Create}
        />,
      ]}
    </Admin>
  );
};

export default App;
