import React from 'react'

function HeaderItem({name, Icon}:any) {
    return (
        <div className='flex items-center gap-3 text-[15px] cursor-pointer font-semibold hover:underline underline-offset-8 mb-3'>
            <Icon />
            <h2 className=''>{name}</h2>
        </div>
    )
}

export default HeaderItem