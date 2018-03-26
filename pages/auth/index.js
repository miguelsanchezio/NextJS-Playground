import React from 'react';
import User from '../../components/User';

const authIndexPage = props => (
  <div>
    <h1>Auth Page - {props.appName}</h1>
    <User name="Miguel" age="24"/>    
  </div>
);

authIndexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({appName: 'Super App(Auth)'});
    }, 1500);
  });
  return promise;
}

export default authIndexPage;