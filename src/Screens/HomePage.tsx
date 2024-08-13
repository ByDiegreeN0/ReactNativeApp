import React from 'react';
import { View, ScrollView } from 'react-native';
import Offers from '../components/Offers'; 
import SearchBar from '../components/SerchBar';

const App = () => {
 
  const offersData = [
    {
      id: 1,
      title: 'Desarrollador Front-End',
      position: 'Desarrollador React',
      salary: '$70,000',
      city: 'Ciudad de México',
      date: '12 de agosto, 2024',
    },
    {
      id: 2,
      title: 'Diseñador UX/UI',
      position: 'Diseñador Senior',
      salary: '$65,000',
      city: 'Monterrey',
      date: '15 de agosto, 2024',
    },
    {
      id: 3,
      title: 'Ingeniero de Software',
      position: 'Full Stack',
      salary: '$85,000',
      city: 'Guadalajara',
      date: '20 de agosto, 2024',
    },
  ];

 

  return (
    <ScrollView>
      <SearchBar />
      <View>
        {offersData.map((offer) => (
          <Offers
            key={offer.id} 
            title={offer.title}
            position={offer.position}
            salary={offer.salary}
            city={offer.city}
            date={offer.date}
           
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
