import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import useFetch from './../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { Container, Col, Row } from 'reactstrap'
import { AuthContext } from '../context/AuthContext'

import '../styles/profile.css'

const Profile = () => {

    const { user } = useContext(AuthContext)

    return (
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
    )
}

export default Profile