import { InstrumentProduct } from './instrument';

export const INSTRUMENTS: readonly InstrumentProduct[] = [
  {
    id: 1,
    name: 'Studio Acoustic Guitar',
    category: 'Guitars',
    description: 'Warm, balanced tone with a solid spruce top. A reliable companion for practice and performance.',
    price: 349,
    photo: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 2,
    name: 'Classic Electric Guitar',
    category: 'Guitars',
    description: 'Versatile single-coil sound and a comfortable neck for every style, from clean to driven.',
    price: 529,
    photo: 'https://plus.unsplash.com/premium_photo-1767986253450-93fc99c607ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    id: 3,
    name: 'Stage Digital Piano',
    category: 'Keyboards',
    description: 'Expressive weighted keys and rich piano sounds in a portable stage-ready design.',
    price: 799,
    photo: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 4,
    name: 'Concert Violin',
    category: 'Strings',
    description: 'A full-size violin with a bright, resonant voice, ready for lessons and the orchestra.',
    price: 419,
    photo: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    id: 5,
    name: 'Professional Drum Kit',
    category: 'Drums',
    description: 'A punchy five-piece kit with responsive shells for rehearsals, recording, and live shows.',
    price: 1149,
    photo: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 6,
    name: 'Alto Saxophone',
    category: 'Wind',
    description: 'A smooth-playing alto saxophone with an even response across the full range.',
    price: 689,
    photo: 'https://plus.unsplash.com/premium_photo-1679826780221-4dc34657fdb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    id: 7,
    name: 'Concert Ukulele',
    category: 'Strings',
    description: 'Easy to play and full of sunny character, crafted with a comfortable concert-size body.',
    price: 89,
    photo: 'https://images.unsplash.com/photo-1648607679270-7fa43c9daf02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    id: 8,
    name: 'Brass Trumpet',
    category: 'Wind',
    description: 'A responsive brass trumpet with a clear, centered tone for ensemble or solo playing.',
    price: 459,
    photo: 'https://plus.unsplash.com/premium_photo-1679826780221-4dc34657fdb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    id: 9,
    name: 'Electric Bass Guitar',
    category: 'Guitars',
    description: 'Deep, dependable low end and smooth playability to lock in with any rhythm section.',
    price: 399,
    photo: 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 10,
    name: 'Portable Synthesizer',
    category: 'Keyboards',
    description: 'Shape your sound with versatile keys, hands-on controls, and expressive performance tools.',
    price: 599,
    photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Kurzweil_Synthesizer_and_MIDI_Keyboard_Controller_PC3K6.jpg/960px-Kurzweil_Synthesizer_and_MIDI_Keyboard_Controller_PC3K6.jpg'
  },
  {
    id: 11,
    name: 'Travel Acoustic Ukulele',
    category: 'Strings',
    description: 'A lightweight, easy-to-carry ukulele with a bright, cheerful voice for casual jam sessions.',
    price: 129,
    photo: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    id: 12,
    name: 'Rhythm Cajon',
    category: 'Percussion',
    description: 'A compact percussion instrument with punchy low-end response for acoustic sets and practice rooms.',
    price: 179,
    photo: 'https://media.istockphoto.com/id/2292164123/photo/cajon-box-drum-3d-illustrations.webp?a=1&b=1&s=612x612&w=0&k=20&c=6lcv34soRbeMq4cJVXdqrgMUpLvAaA3Tf7TYr7s8xRQ='
  }
];
