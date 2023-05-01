const express = require('express')
const app = express();
const cors = require('cors')
const destinations = require('./data/destination.json');
const hotelDestination = require('./data/destination.json');
const hotels = require('./data/hotels.json');
const port = 5000;

app.get('/', (req, res)=>{
    res.send('The Cool Travel')
});

app.use(cors());

app.get('/destinations', (req,res) =>{
    res.send(destinations)
});


app.get('/destinations/:id', (req, res) =>{
    const id = parseInt(req.params.id);
        const destination = destinations.find(db => parseInt(db.id) === id)
        res.send(destination)
   
})

app.get('/hotelsDestination', (req,res) =>{
    res.send(hotelDestination)
});
app.get('/hotelsDestination/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    if(id === 0){
        res.send(hotelDestination)
    }
    else{
        const destinationHotels = hotels.filter(hotel => hotel.destination_id === id)
        res.send(destinationHotels)
    }
})

app.get('/hotels', (req, res) =>{
    res.send(hotels)
})

app.get('/hotels/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    console.log(id)
    const selectedHotel = hotels.find(hotel => hotel.id === id)
    res.send(selectedHotel)
})

app.listen(port, () =>{
    console.log('Hello From the Cool Travel')
})