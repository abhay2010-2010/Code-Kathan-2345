import { Card, Divider, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

const InnovationCard = () => {
  return (
    <Card >
      <Image src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/A4B7/production/_132976124_terry2.jpg.webp' />
      <Link fontSize={'20'} fontWeight={'800'}>Why are electric car fires so hard to deal with?</Link>
      <Text>Dealing with an electric car fire takes up to 10 times longer</Text>
      <br />
      <Text>4 hrs ago | <span style={{fontWeight:'bold'}}>NEWS</span> England</Text> 
      
    </Card>
  )
}

export default InnovationCard
