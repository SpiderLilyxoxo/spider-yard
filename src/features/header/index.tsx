import { useState } from 'react';
import {Box, Text} from "@chakra-ui/react";

function Header() {
    const [count, setCount] = useState(0)
    const username = "Jack;"
    let names: string[] = username.split(" ")
    const namesAll: Array<number> = [1,2,3]

  return (
    <div>
        header
    </div>
  )
}

export default Header