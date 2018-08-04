var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    let object = {
        name: 'John Snow',
        image: 'https://api.adorable.io/avatars/210/johnsnow@adorassble.io.png',
        birth: new Date(),
        contact: {
            email: 'john.snow@gmail.com',
            phone: '0544432221'
        },
        education: ['college', 'university', 'life'],
        work: ['sela', 'elal'],
        latest_posts: [
            {title: 'best post EVVA !!', text: 'slept for 5 hours !', likes: 15},
            {title: 'trip to canada', text: 'so cold here', likes: 35},
            {title: 'at the beach', text: 'here is a fish !', likes: 5},
            {title: 'best post EVVA !!', text: 'slept for 5 hours !', likes: 15},
            {title: 'trip to canada', text: 'so cold here', likes: 35},
            {title: 'at the beach', text: 'here is a fish !', likes: 5}
        ],
        top_connections: [
            {name: 'Aria Stark', image: 'https://api.adorable.io/avatars/220/contact1%40adorable.io', facebook: 'ariastark'},
            {name: 'Daenerys Targaryen', image: 'https://api.adorable.io/avatars/220/contact2%40adorable.io', facebook: 'danny'},
            {name: 'Dragon', image: 'https://api.adorable.io/avatars/220/contact3%40adorable.io', facebook: 'blackdrag'},
            {name: 'Ned Stark', image: 'https://api.adorable.io/avatars/220/contact4%40adorable.io', facebook: 'headlessned'}
        ]
    };
    res.send(object);
});

module.exports = router;
