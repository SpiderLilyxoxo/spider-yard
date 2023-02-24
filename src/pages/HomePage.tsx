import { useState } from 'react';
import {Box, Text} from "@chakra-ui/react";

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Box textAlign="center" fontSize="x1">
        <Text>Heyyy</Text>
      </Box>
    </div>
  )
}

export default HomePage
