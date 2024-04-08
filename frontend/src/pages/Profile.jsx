import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import useFetch from './../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { Container, Col, Row } from 'reactstrap'
import { AuthContext } from '../context/AuthContext'

import BookingCard from '../shared/BookingCard'

import '../styles/profile.css'

const Profile = () => {

    const { user } = useContext(AuthContext)
    // console.log(user._id)

    const { data: booking, loading, error } = useFetch(`${BASE_URL}/booking/${user._id}`)
    // console.log(booking, loading, error)

    // function printBooking(booki) {
    //     let bo = ''
    //     for (const [key, value] of Object.entries(booki)) {
    //         bo = bo.concat(`${key}:`)
    //         for (const [key2, value2] of Object.entries(value)) {
    //             bo = bo.concat(`${key2}: ${value2}`);
    //         }
    //         bo = bo.concat('\n')
    //     }
    //     return bo
    // }

    // printBooking(booking)

    return (
        <>
            <Container className='profile-container'>
                <div className='profile-header'>
                    <h1>User Profile</h1>
                </div>
                <div className='profile-picture'>
                    <img src={user.photo} alt="" />
                </div>
                <div className='profile-info'>
                    <table>
                        <tr>
                            <td><h1>Username:</h1></td>
                            <td><h1>{user.username}</h1></td>
                        </tr>
                        <tr>
                            <td><p>Email: </p></td>
                            <td><p>{user.email}</p></td>
                        </tr>
                        <tr>
                            <td><p>Role:</p></td>
                            <td><p>{user.role}</p></td>
                        </tr>
                        <tr>
                            <td><p>Created at:</p></td>
                            <td><p>{user.createdAt}</p></td>
                        </tr>
                        <tr>
                            <td><p>Username updated at:</p></td>
                            <td><p>{user.updatedAt}</p></td>
                        </tr>
                        <tr>
                            <td><p>User ID:</p></td>
                            <td><p>{user._id}</p></td>
                        </tr>
                    </table>
                </div>
            </Container>
            <Container>
                <h1>My Bookings</h1>
                {loading && <h4 className='text-center pt-5'>Loading......</h4>}
                {error && <h4 className='text-center pt-5'>{error}</h4>}
                {!loading && !error && (
                    <Row>
                        {booking.map(booki => (
                            <Col lg='3' key={booki._id}>
                                <BookingCard booki={booki} />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </>
    )
}

export default Profile