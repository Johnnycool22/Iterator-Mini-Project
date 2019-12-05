const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: male,
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/portraits/men//82.jpg'
  },
  {
    name: 'Jenny Smith',
    age: 26,
    gender: female,
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/portraits/women//82.jpg'
  },
  {
    name: 'Will Johnson',
    age: 38,
    gender: male,
    lookingfor: 'female',
    location: 'New York NJ',
    image: 'https://randomuser.me/portraits/men//84.jpg'
  }
];

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } :
      { done: true } 
    }
  };
}