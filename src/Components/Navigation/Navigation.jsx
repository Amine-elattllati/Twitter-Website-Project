import React from "react"
import { navigationMenu } from "./NavigationMenu"
import { useNavigate } from "react-router-dom"

const Navigation = () => {
    const navigate=useNavigate();
    return (
    <div className='h-screen sticky top-0'>
        <div>
            <div className='py-5'>
                <img src="src\Components\Navigation\nouveau-logo-twitter-2023-x-fond-blanc-vecteur_1017-45422.avif" alt=""/>
            </div>
            <div className='space-y-6'>
                {navigationMenu.map((item)=> <div className='cursor-pointer flex space-x-3 
                items-center' onClick={()=>item.title==="Profile"?navigate(`/profile/${5}`)
            :navigate(item.path)}>
                    {item.icon}
                    <p className='text-x1'>{item.title}</p>
                    </div>)}
            </div>
        </div>
    </div>
    )
}

export default Navigation
