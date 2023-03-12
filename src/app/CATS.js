import chibiThumb from '../imgs/chibi_thumbnail.jpg';
import benThumb from '../imgs/ben_thumbnail.jpeg'
import naughtyThumb from '../imgs/naughty_thumbnail.jpeg';
import heartThumb from '../imgs/heart_thumbnail.jpeg'

export const CATS = [{
        id: 0,
        name: 'Chibi',
        thumbnail: chibiThumb,
        imgFolder: 'images/chibi/',
        imgs: ['chibi_sample_v2.jpeg', 'chibi_sample4.jpeg', 'chibi_sample3.jpeg','chibi_sample5.jpeg'],
        thumbs: ['chibi_sample_v2.jpeg', 'chibi_sample4.jpeg', 'chibi_sample3.jpeg','chibi_sample5.jpeg'],
        description:
            `Chibi was a stray cat, Mr. & Mrs. Suzuki rescued Chibi and healed her wound.Later she has become my little sister and now she is living with my parents. 
            As she lived outdoors for a long time, she scares about rainny day and often hides under sofa even she has lived with us for 8 years.
            In Japanese, "Chibi" means little kid.`,
        location: 'Hong Kong',
        age: '10',
        special: 'Tail looks like a rabbit-tail'

    },
    {
        id: 1,
        name: 'Ben',
        thumbnail: benThumb,
        imgFolder: 'images/ben/',
        imgs: ['ben_sample1.jpeg', 'ben_sample2.jpeg'],
        thumbs: ['ben_sample1_thumbnail.jpeg', 'ben_sample2_thumbnail.jpeg'],
        description:
            'Ben looks very like Heart, He was rescued by a cat-volunteer together with Naughty and Heart. Now Ben is living with that cat-volunteer. Previously he stayed at our home for a vacation with Heart and Naughty',
        location: 'United States',
        age: 1,
        special: 'N/A'

    },
    {
        id: 2,
        name: 'Heart',
        thumbnail: heartThumb,
        imgFolder: 'images/heart/',
        imgs: ['heart_sample.jpeg','heart_sample2.jpeg','heart_sample4.jpeg','heart_sample5.jpeg','heart_sample6.jpeg'],
        thumbs: ['heart_sample.jpeg','heart_sample2.jpeg','heart_sample4.jpeg','heart_sample5.jpeg','heart_sample6.jpeg'],
        description:
            'According to veterinarian, Heart is the elder sister of Naughty and Ben. Unlike Naughty, Heart doesnt stay close to us unless she wants something from us.',
        location: 'United States',
        age: 1,    
        special: 'She likes playing ball'
    },
    {
        id: 3,
        name: 'Naughty',
        thumbnail: naughtyThumb,
        imgFolder: 'images/naughty/',
        imgs: ['naughty_sample8.jpeg', 'naughty_sample7.jpeg'],
        thumbs: ['naughty_sample8.jpeg', 'naughty_sample7.jpeg'],
        description:
            'Naughty is a domestic shorthair cat. She came to our home with her sister: Heart. She follows us everywhere and curious to every new thing we bring to home. We call her as "Security of our home"',
        location: 'United States',
        age: 1,    
        special: 'She likes being around us'
    
    }
];