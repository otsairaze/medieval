import React from 'react'
import Typography from './Typography/Typography'
import { Menu } from 'lucide-react'


export default function Navigation() {
  const arr = ["Инвентарь", "Аукцион", "Магазин", "Дуэли", "Налёт" ]
  return (
    <>
       <div className='flex gap-4 items-center'>
       <Menu className='cursor-pointer' width={24} height={24} />
       <ul className='flex gap-4'>
      { 
        arr.map((item, index) => <Typography variant='paragraph16_regular' tag='li' key={index}>{item}</Typography>)
      }
    </ul>
       </div>
    </>
  )
}
