import './DestinationStyle.css'

import React from 'react'
import DestinationData from './DestinationData'

import choptaOne from '../assets/choptaOne.jpeg'
import choptaTwo from '../assets/choptaTwo.jpeg'
import rishikeshOne from '../assets/rishikeshOne.jpeg'
import rishikeshTwo from '../assets/rishikeshTwo.jpeg'
import nelongOne from '../assets/nelongOne.jpeg'
import nelongTwo from '../assets/nelongTwo.jpeg'

function Destination() {
  return (
    <div className="destination">
        <h1>Popular Destination</h1>
        <p className='text-para'>Tours give you the opportunity to see a lot, within a time frame.</p>
        <DestinationData
        className="first-des"
        heading="Chopta- mini Switzerland"
        text="Chopta is a picturesque hamlet which is still unexplored by travelers, is also famous as Mini Switzerland of Uttarakhand. Wake up with cool salubrious breeze and chirping of birds in Chopta which is a far cry from the blaring horns of the cities and other hill stations, morning view from Chopta is invigorating when the crimson rays of sun kisses the snow-laden Himalayas.

        This hushed abode is enclosed by the dwindling pines, deodars, rhododendrons and other conifers that can be found in this region, which makes Chopta rich in flora and fauna."
        imgOne={choptaOne}
        imgTwo={choptaTwo}
        />
        <DestinationData
        className="first-des-reverse"
        heading="Rishikesh-  World capital of Yoga and Meditation"
        text="Rishikesh has spectacular view of jungle-clad hills. Rishikesh has also confluence of River Ganges and Chandrabhaga.  Every year during the March month one week long International yoga festival is hosted by Rishikesh.Rishikesh is also known as gateway to the Char Dham. Char Dham is four popular holy temples on the hills (Kedarnath, Badrinath, Gangotri, and Yamunotri) Thousands of people attracted every year to Rishikesh for spiritual relief, peace, learn yoga, adventure and to take a dip for salvation.Apart from spirituality now Rishikesh Tourism is also hub for the adventure activities such as rafting, camping, trekking and bungee jumping. Rishikesh is full of tourist every time. There are also big ashrams, centers for Yoga, Meditation, Ayurvedic Massage and astrology are here. Rishikesh is also known as the white water rafting capital of India"
        imgOne={rishikeshOne}
        imgTwo={rishikeshTwo}
        />
        <DestinationData
        className="first-des"
        heading="Nelog Valley- The Ladakh of Uttarakhand "
        text="Nelong Valley lies 45km away from the Indo-Tibetan border, around 256km from Dehradun, Uttarakhand. It is considered to be one of the most thrilling mountaineering treks in India. 

        At a height of 11,000ft, the view from here is breathtaking. The valley offers a clear and surreal view of the Tibetan Plateau. Gartang Gali, a wooden walkway, is a main attraction of the valley said to have been built in the 17th Century. It was known as one of the main routes for trade between India & China in 1962."
        imgOne={nelongOne}
        imgTwo={nelongTwo}
        />
    </div>
  )
}

export default Destination