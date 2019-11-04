import React from 'react';
import { withStyles, Theme } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = (theme: Theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    selectRoot: {
      color: '#FFFFFF',
      padding: '10px 14px',
    },
    iconSelect: {
      color: '#FFFFFF',
    }
  });

  const initialState = { currency: 'DKK' };
  type State = Readonly<typeof initialState>

type SelectorProps = {
  withOutLabel: boolean,
  classes?: any
}

type StateTypes = {
  currency: String
}

export class Selector extends React.Component<SelectorProps, StateTypes> {
  constructor(props: SelectorProps){
    super(props);
  }

  private handleChange = ( event: React.ChangeEvent<{ value: unknown }> ) => {
    console.log(event.target.value);
    this.setState({ currency: event.target.value as string});
  };

  readonly state: State = initialState; 
  render(){
    const { classes } = this.props;
    const { currency } = this.state;
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        onChange={e => this.handleChange(e)}
        value={currency}
        defaultValue={'DKK'}
        classes={{ root: classes.selectRoot, icon: classes.iconSelect }}
        inputProps={{
          name: 'age',
          id: 'outlined-age-native-simple',
        }}
      >
        <MenuItem value={'DKK'}>DKK</MenuItem>
        <MenuItem value={'USD'}>USD</MenuItem>
      </Select> 
    </FormControl>
  );
}
}

export default withStyles(styles)(Selector as any);