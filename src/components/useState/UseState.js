import React from 'react'
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function UseState() {
  const [state, setState] = useState('This is my Initial State')

  function handleClick() {
    setState('This is my Set State')
  }
  function removeState() {
    setState('')
  }

  const codeString = 'const [state, setState] = useState(\'This is my Initial State\')\r\n\r\nfunction handleClick() {\r\n    setState(\'This is my Set State\')\r\n}\r\nfunction removeState(){\r\n    setState(\'\')\r\n}';

  return (
    <main>
      <h1>useState</h1>

      <Stack spacing={2} direction="row">
        <Button onClick={handleClick} variant="contained">Set State</Button>
        <Button onClick={removeState} variant="outlined">Remove State</Button>
      </Stack>

      <Typography variant="h5" sx={{ py: 2 }}>
        result: {state}
      </Typography>

      <Paper variant="outlined" sx={{ p: 2 }}>
        <SyntaxHighlighter language="javascript" style={a11yLight}>
        {codeString}
        </SyntaxHighlighter>
      </Paper>

    </main>
  )
}
