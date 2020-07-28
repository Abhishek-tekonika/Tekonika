// Practicing code for Zoom image filter with React
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(5),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }),
);

const SimpleZoom = (): JSX.Element => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <div className={ classes.root } >
        <div className={ classes.container } >
          <Zoom in={ checked }>
            <Paper elevation={ 4 } className={ classes.paper } >
              <svg className={ classes.svg } >
                <polygon points="0,100 50,00, 100,100" className={ classes.polygon } />
              </svg>
            </Paper>
          </Zoom>
          <Zoom in={ checked } style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
            <Paper elevation={ 4 } className={ classes.paper }>
              <svg className={ classes.svg }>
                <polygon points="0,100 50,00, 100,100" className={ classes.polygon } />
              </svg>
            </Paper>
          </Zoom>
        </div>
      </div>
    </>
  );
};


export default SimpleZoom;