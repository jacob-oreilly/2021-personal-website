import { Avatar, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
const pageWrappper = {
  margin: "20px 0px"
};
const leftAlignPadding = {
  paddingLeft: 25
};
function App() {
  return (
    <div className="App" style={pageWrappper}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={4}>

            <Typography variant="h4" component="div" gutterBottom style={{ textAlign: 'center' }}>
              Hi I'm Jake!
            </Typography>
            <div style={{ paddingTop: '20px' }}>
              <Avatar style={{ height: '200px', width: '200px', margin: 'auto' }} alt="Semi up to date picture" src="/images/profile.jpg" />
            </div>
            <div style={{ paddingTop: '30px' }}>
              <Typography className="padding-left-aligned" variant="h5" component="div" gutterBottom>
                Software Engineer
              </Typography>
              <Typography className="padding-left-aligned" variant="body1" component="div" gutterBottom>
                Currently really enjoying react and learning about random noise algorithms in C++ (I don't really know what I'm doing...)
              </Typography>
              <Typography className="padding-left-aligned" variant="subtitle2" component="div" gutterBottom>
                I love bikes!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}

export default App;
