import React, { useContext, useState } from 'react'
import { Box, Text } from '@chakra-ui/layout'
import {
  Tooltip,
  Menu,
  MenuButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useToast,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar } from '@chakra-ui/avatar'
import { AuthContext } from '../../context/AuthContext'
import { useDisclosure } from '@chakra-ui/hooks'

import { BASE_URL } from '../../utils/config'
import axios from "axios";
import ChatLoading from '../ChatLoading'
import UserListItem from '../UserAvatar/UserListItem'
import useFetch from '../../hooks/useFetch'

const SideDrawer = () => {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingChat, setLoadingChat] = useState()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useContext(AuthContext)

  const toast = useToast()

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      })
    }

    try {
      setLoading(true)

      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      // }

      const { data } = await fetch(`${BASE_URL}/users/search/getUserBySearch?username=${search}`)

      setLoading(false)
      setSearchResult(data)
    } catch (err) {
      console.log(err)
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      })
    }
  }

  const accessChat = (userId) => { }

  return (
    <>
      <Box d='flex' justifyContent='space-between' alignItems='center' bg='white' w='100%' p='5px 10px 5px 10px' borderWidth='5px' >
        <Tooltip label="Search users to chat" hasArrow placement='bottom-end'>
          <Button variant='ghost' onClick={onOpen}>
            <i class="ri-search-line"></i>
            <Text d={{ base: "none", md: "flex" }} px='4' >
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize='2x1' fontFamily='Work sans'>
          Chat with Experts
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize='2x1' m={1} />
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
        </div>
      </Box>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' >Search Users</DrawerHeader>
          <DrawerBody>
            <Box d='flex' pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map(user => (
                <UserListItem key={user._id} user={user} handleFunction={() => accessChat(user._id)} />
              ))
            )}
          </DrawerBody>
        </DrawerContent>

      </Drawer>
    </>
  )
}

export default SideDrawer