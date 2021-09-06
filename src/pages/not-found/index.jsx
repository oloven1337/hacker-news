import React from 'react'
import { useHistory } from 'react-router-dom'

import { ButtonStyled } from '../../components/button'
import { NotFoundStyled } from './style'


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
            <NotFoundStyled><span>404</span>Page not found :(</NotFoundStyled>
        </div>
    )
}

export default NotFound
