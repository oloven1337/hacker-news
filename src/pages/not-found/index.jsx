import React from 'react'
import { useHistory } from 'react-router-dom'
import { ButtonStyled } from './style'

const NotFound = () => {

    const history = useHistory()
    const goBackHandler = () => history.push('/')

    return (
        <div>
            <ButtonStyled
                variant="contained"
                color="primary"
                onClick={goBackHandler}>
                Go back
            </ButtonStyled>
            <h1>404 NOT FOUND</h1>
        </div>
    )
}

export default NotFound
