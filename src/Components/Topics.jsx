import { Box } from '@mui/material'
import React from 'react'
import TopicLists from './TopicLists'

const topicList = [
    { Title: "Politics & Policy"},
    { Title: "Health & Sport"},
    { Title: "Business & Economy"},
    { Title: "Technology & Science"},
    { Title: "Electricity"},
    { Title: "Cryptocurrency & Bitcoin"},
]

const Topics = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
        {topicList.map((topic, index) => (
            <TopicLists key={index} item={topic} />
        ))}
    </Box>
  )
}

export default Topics