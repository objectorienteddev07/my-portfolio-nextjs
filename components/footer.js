import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Ayan Ansari. All Rights Reserved. | under-development
    </Box>
  )
}

export default Footer
