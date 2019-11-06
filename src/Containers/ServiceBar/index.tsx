import React from 'react';
import { withStyles, Theme } from '@material-ui/core'
import { ContactSupport } from '@material-ui/icons';

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: '#efefef',
    width: '100%',
    height: 150,
  },

  serviceList: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: '0 50px',
    margin: 0,
    '& li': {
      listStyle: 'none',
      '& *': {
        display: 'block',
        margin: '0 auto',
        textAlign: 'center' as const,
        '&:first-child': {
          marginBottom: 18,
        },
        '&:nth-child(2)': {
          marginBottom: 5,
        },
        '&:nth-child(3)': {
          opacity: .7,
        }
      }
    }
  }
});

type ComponentProps = {
  classes?: any
}

type ComponentState = {

}

export class ServiceBar extends React.Component<ComponentProps, ComponentState> {
  render(){
    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <ul className={classes.serviceList}>
        <li>
          <ContactSupport />
          <strong>Title</strong>
          <span>about this</span>
        </li>
        <li>
          <ContactSupport />
          <strong>Title</strong>
          <span>about this</span>
        </li>
        <li>
          <ContactSupport />
          <strong>Title</strong>
          <span>about this</span>
        </li>
        <li>
          <ContactSupport />
          <strong>Title</strong>
          <span>about this</span>
        </li>
      </ul>
    </div>
  );
}
}

export default withStyles(styles)(ServiceBar as any);