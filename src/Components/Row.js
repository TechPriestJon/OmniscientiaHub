import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Row = (props) => {
  const elements = React.Children.toArray(props.children);
  return (
  <Grid container sx={{ width: '100%', marginTop: '1vh' }}>
    <Grid item sx={{ width: '12vw', marginLeft: '4vw', marginRight: '2vw', marginTop: '2vh', marginBottom: '2vh', height: '12vh'  }}>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Paper sx={{ width: '100%', height: '100%' }}>
          <Grid container sx={{ width: '100%', height: '100%', display: 'table' }}>
            <Grid item sx={{ width:'100%', height: '100%', textAlign: 'center', display: 'table-cell', verticalAlign: 'middle' }}>
                {elements[0]}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
    <Grid item sx={{ width: '12vw', marginLeft: '2vw', marginRight: '2vw', marginTop: '2vh', marginBottom: '2vh', height: '12vh'  }}>
    <Box sx={{ width: '100%', height: '100%' }}>
        <Paper sx={{ width: '100%', height: '100%' }}>
          <Grid container sx={{ width: '100%', height: '100%', display: 'table' }}>
            <Grid item sx={{ width:'100%', height: '100%', textAlign: 'center', display: 'table-cell', verticalAlign: 'middle' }}>
                {elements[1]}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
    <Grid item sx={{ width: '12vw', marginLeft: '4vw', marginRight: '2vw', marginTop: '2vh', marginBottom: '2vh', height: '12vh'  }}>
    <Box sx={{ width: '100%', height: '100%' }}>
        <Paper sx={{ width: '100%', height: '100%' }}>
          <Grid container sx={{ width: '100%', height: '100%', display: 'table' }}>
            <Grid item sx={{ width:'100%', height: '100%', textAlign: 'center', display: 'table-cell', verticalAlign: 'middle' }}>
            {elements[2]}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
    <Grid item sx={{ width: '12vw', marginLeft: '2vw', marginRight: '2vw', marginTop: '2vh', marginBottom: '2vh', height: '12vh'  }}>
    <Box sx={{ width: '100%', height: '100%' }}>
        <Paper sx={{ width: '100%', height: '100%' }}>
          <Grid container sx={{ width: '100%', height: '100%', display: 'table' }}>
            <Grid item sx={{ width:'100%', height: '100%', textAlign: 'center', display: 'table-cell', verticalAlign: 'middle' }}>
                {elements[3]}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  </Grid>
  );
}

export default Row;





