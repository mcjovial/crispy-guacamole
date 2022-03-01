import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [show, setShow] = useState(false)
const [loading, setLoading] = useState(false)


return (
    <VStack spacing="10px">
        <FormControl id='email' isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input 
                value={email}
                type='email'
                placeholder='Enter Your Email Address'
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
                <Input 
                    value={password}
                    type={show ? 'text' : 'password'}
                    placeholder='Enter Your Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={(e) => setShow(!show)}>
                        {show? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button 
            colorScheme='blue'
            width='100%'
            style={{marginTop: 15}}
            isLoading={loading}
        >
            Login
        </Button>
        <Button
            variant='solid'
            colorScheme='red'
            width='100%'
        >
            Guest User
        </Button>
    </VStack>
  )
}

export default Login