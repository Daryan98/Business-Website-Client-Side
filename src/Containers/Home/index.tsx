import React from 'react';
import { withStyles, Theme } from '@material-ui/core'

import NavigationBar from '../NavigationBar';
import ServiceBar from '../ServiceBar';

const styles = (theme: Theme) => ({

  });

type SelectorProps = {
  classes?: any
}

type StateTypes = {

}

export class Home extends React.Component<SelectorProps, StateTypes> {
  render(){
  return (
    <React.Fragment>
        <NavigationBar/>
        <ServiceBar/>
    </React.Fragment>
  );
}
}

export default withStyles(styles)(Home as any);