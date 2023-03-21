import { Typography } from '@mui/material'
import React from 'react'
import { DataAuth } from '../context/DataProvider'

const TopicLists = ({ item }) => {
    const { setHeadline } = DataAuth()
    const handleClick = (e) => {
        e.preventDefault()
        setHeadline(item.Title)
    }
  return (
    <div onClick={handleClick}>
        <Typography sx={{ cursor: 'pointer', ":hover":{ textDecoration: 'underline 2px', textUnderlineOffset: '5px'}}}>{item.Title}</Typography>
    </div>
  )
}

export default TopicLists