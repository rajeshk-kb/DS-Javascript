var util = require('util');
//console.log(util.inspect(BST, { showHidden: true, depth: null, colors: true }))

// Design a movie ticket booking system like Bookmyshow

//The Main Classes to be used for the user personas :

/*          User
            Movie
            Theater
            Booking
            Address
            Facilities 
*/

// Enums :
var seatStatus = {
    SEAT_BOOKED: true,
    SEAT_NOT_BOOKED: false
}
Object.freeze(seatStatus);

var movieStatus = {
    MOVIE_AVAILABLE: true,
    MOVIE_NOT_AVAILABLE: false
}
Object.freeze(movieStatus);

var movieType = {
    ENGLISH: 1,
    HINDI: 2
}
Object.freeze(movieType);

var seatType = {
    NORMAL,
    EXECUTIVE,
    PREMIUM,
    VIP
}
Object.freeze(seatType);


var PaymentStatus = {
    PAID,
    UNPAID
}
Object.freeze(PaymentStatus);


const User = new mongoose.Schema({
    userId: {type: Number},
    name: {type: Number},
    dateOfBirth: {type: Date},
    mobNo: {type: Number},
    emailId: {type: String},
    sex: {type: String}
});

const Movie = new mongoose.Schema({
    movieId: {type: Number},
    theaterId: {type: Number},
    MovieType: {type: movieType},
    MovieStatus: {type: movieStatus}
});

const Theater = new mongoose.Schema({
    theaterId: {type: Number},
    name: {type: String},
    Adress: {type: String},
    Movies: {type: Array},// List of the movies
    rating: {type: Number}
});

const Booking = new mongoose.Schema({
    bookingId: {type: Number},
    userId: {type: Number},
    movieId: {type: Number},
    bookedSeats: {type: Array},// List of seats
    status_of_payment: {type: Number},
    amount: {type: Number},
    booked_date: {type: Date},
    movie_timing: {type: TimeRanges}
});


const Address = new mongoose.Schema({
    city: {type: String},
    pinCode: {type: Number},
    state: {type: String},
    streetNo: {type: Number},
    landmark: {type: String}
});