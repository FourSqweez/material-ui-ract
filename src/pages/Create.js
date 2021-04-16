import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create aNew Note
      </Typography>

      <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>

      <Button
        onClick={() => console.log('you clicked me')}
        type="submit"
        variant="contained"
        color="secondary"
      >
        Submit
      </Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Container>
  )
}
