import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'


export default function UseEffect() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		console.log(count)
		if(count <= 0) {
			setCount(0)
		}
	}, [count])

	const codeString = 'const [count, setCount] = useState(0)\r\n\r\nuseEffect(() => {\r\n\tconsole.log(count)\r\n\tif(count <= 0) {\r\n\t\tsetCount(0)\r\n\t}\r\n})';
	
  return (
    <main>
      <h1>useEffect</h1>
			
      <Stack spacing={2} direction="row">
				<Button onClick={() => setCount(count - 1)} variant="outlined">-</Button>
				<Paper variant="outlined" sx={{ py: 2, px: 3 }}>{count}</Paper>
				<Button onClick={() => setCount(count + 1)} variant="contained">+</Button>
      </Stack>

			<Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
        <SyntaxHighlighter language="javascript" style={a11yLight}>
        {codeString}
        </SyntaxHighlighter>
      </Paper>
    </main>
  )
}
