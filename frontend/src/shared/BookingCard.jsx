import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

const BookingCard = ({ booki }) => {

    const { _id, userId, userEmail, tourName, fullName, guestSize, phone, bookAt, createdAt, updatedAt } = booki

    return (
        <div className='booking__card'>
            <Card>
                <CardBody>
                    <div>
                        Booking ID: {_id}
                    </div>
                    <div>
                        Tour Name: {tourName}
                    </div>
                    <div>
                        Full Name: {fullName}
                    </div>
                    <div>
                        Number of Guests: {guestSize}
                    </div>
                    <div>
                        Phone Number: {phone}
                    </div>
                    <div>
                        Booked At: {bookAt}
                    </div>
                    <div>
                        Created At: {createdAt}
                    </div>
                    <div>
                        Updated At: {updatedAt}
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default BookingCard