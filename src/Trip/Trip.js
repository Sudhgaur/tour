import './TripStyle.css';

import React from 'react'
import TripData from './TripData';
import kedarkantha from '../assets/kedarkantha.jpeg';
import Flowers from '../assets/VoFlowers.jpeg';
import Chopta from '../assets/choptaThree.jpeg';

function Trip() {
  return (
    <>
    <div className="trip">
        <h1>Recent Trips</h1>
        <p className='trip-text'>You can discover unique destination using Google Maps.</p>

        <div className="tripcard">
            <TripData
            image={kedarkantha}
            heading="KedarKantha -(March 2023)"
            text="Kedarkantha (not to be confused with the popular Temple Kedarnath) is a 6-day long trek in Govind Pashu Vihar National Park in Uttarakhand (6 when including the travel days from Dehradun to the base camp and back). Kedarkantha is easily one of the most popular treks in India — popular amongst seasoned trekkers and beginners alike.
            There are many reasons why it is a very popular trek to do in the Indian Himalayas.  The most important of them is this — the summit climb.           
            The summit climb of Kedarkantha is a very rewarding one.  Right from the base camp of the trek, the summit looms large.  As you start your trek in the early hours of the morning and steadily climb up the steep slope of snow, the world opens up around you.          
            The climb is not easy.  The entire stretch is steadily steep.  As you get closer to the summit, it gets tricky as well.  But the big mountains of the upper Himalayas keep you company until you finally reach the summit.
            Very few treks offer the same adventure, making it popular among beginners for its finest summit climb."
            />
            <TripData
            image={Flowers}
            heading="Valley of Flowers (July 2023)"
            text="The Valley of Flowers trek is one of India’s most popular treks in the Himalayas. People who haven’t even stepped into the Himalayas, have heard about the Valley of Flowers trek. 
            But there is a solid reason behind Valley Of Flower’s legendary popularity – it is one of India’s oldest known treks.            
            In 1980, the Indian government created the Valley of Flowers National Park, and later in 2002, it was recognized as a UNESCO World Heritage Site. This pushed Valley of Flowers on the bucket list of trekkers from around the world.          
            Having said that, you must note that the Valley Of Flowers trek is not easy. It is a moderate level trek, with slightly longer trekking days and a steep ascent to Hemkund Sahib that will challenge your endurance. So, prepare well for this trek. We have talked in detail about this in the ‘difficulty’ section of this trek guide."
            />
            <TripData
            image={Chopta}
            heading="Chopta - mini Switzerland (January 2023)"
            text="Chopta is also known as “Mini Switzerland”, and is getting popular year after year. Chopta Hill Station is located at an altitude of 2700 mts, in the Rudraprayag District of Uttarakhand State. Chopta is surrounded by dense forest, and offers majestic view of Snow Clad Himalayan Ranges and lush green meadows. It is also the starting point of the trek to famous Tungnath Mandir (Panch Kedar Temple) and Chandrashila Summit . The Chopta region is rich in varied flora and fauna, with plenty of Rhododendron and Deodar trees all around."
            />
        </div>
    </div>
    </>
  )
}

export default Trip
