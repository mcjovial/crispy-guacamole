import { Box } from '@chakra-ui/react'
import SideDrawer from '../components/miscellaneous/SideDrawer'
import MyChats from '../components/MyChats'
import { ChatState } from '../Context/ChatProvider'

const Chat = () => {
  const {user} = ChatState()

  return (
    <div>
      {user && <SideDrawer />}
      <Box d='flex' justifyContent='space-between' w='100%' h= '91.5vh' p='10px'>
        {user && <MyChats />}
      </Box>
    </div>
  )
}

export default Chat