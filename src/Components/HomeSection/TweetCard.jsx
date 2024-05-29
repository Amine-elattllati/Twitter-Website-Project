import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat'
import { Avatar, Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const TweetCard = () =>{
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteTweet = ()=>{
        console.log("delete tweet")
        handleClose();
    }
    return(
        <div className=''>

            {/*<div className='flex items-center font-semibold text-gray-700 py-2'>
                <ReactIcon/>
                <p>You Retweet</p>
                </div>*/}

                <div className='flex space-x-5'>
                    <Avatar
                    onClick={()=>navigate(`/profile/${6}`)}
                    className='cursor-pointer' 
                    alt='username' src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png'/>
                </div>
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Amine ELATTLLATI</span>
                            <span className='text-gray-600'>@Amine . 2m</span>
                            <img className='ml-2 w-5 h-5' src='' alt='' />
                        </div>
                        <div>
                        <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MoreHorizIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                    </Menu>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default TweetCard