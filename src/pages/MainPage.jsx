import React, { useContext } from 'react'
import { SomeContext } from '../context' 


const data = [ 
  { 
    title: 'Наушники Logitech G435', 
    description: 'Беспроводная игровая гарнитура Logitech G435 LIGHTSPEED Тщательно сбалансированный высококачественный звук', 
    image: 'https://cdn1.ozone.ru/s3/multimedia-k/6484796972.jpg',
    price: 6500
  },
  { 
    title: 'Мышка Logitech G203', 
    description: 'Мышь проводная Logitech G203 порадует стильным черным корпусом, удобством и функциональностью.', 
    image: 'https://i5.walmartimages.com/asr/95e87df7-bdb3-4f34-a166-b74927fb31f6.0518720641347852990cbd5976dfc544.jpeg',
    price: 2000
  },
  { 
    title: 'Духи Jean Paul Gaultier ', 
    description: 'Le Male Jean Paul Gaultier — это аромат для мужчин, он принадлежит к группе восточные фужерные. Le Male выпущен в 1995 году.', 
    image: 'https://cdn1.ozone.ru/s3/multimedia-d/6146953921.jpg',
    price: 8900
  },
  { 
    title: 'Обувь Salomon XT-6', 
    description: 'Salomon XT-6 уже почти 10 лет пользуется огромной популярностью из-за своей способности преодолевать пересеченную местность.', 
    image: 'https://avatars.mds.yandex.net/i?id=eafaebf0417e8ecada282411b057479f93b15069-9820447-images-thumbs&n=13',
    price: 19500
  },
  { 
    title: 'Очки Apple Vision Pro ', 
    description: 'Гарнитура смешанной реальности Apple Vision Pro', 
    image: 'https://static.tweaktown.com/news/9/1/91765_01_apples-3-500-vision-pro-might-need-600-lenses-for-glasses-wearers_full.jpg', 
    price: 550000
  },
  { 
    title: 'Телефон Iphone 15 Pro', 
    description: 'передовое устройство с корпусом из лёгкого и устойчивого к повреждениям титана, ультрасовременными камерами', 
    image: 'https://ehabgroup.com/media/Apple-iPhone-14-Pro-Max-6GB-256GB-Silver-web2.jpg',
    price: 115000
    
  },
]



const MainPage = () => { 
  const provierData = useContext(SomeContext) // здесь будут все данные
  return (
    <h1>MainPage</h1>
  )
}

export default MainPage