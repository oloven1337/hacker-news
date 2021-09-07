import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components/button'
import { NotFoundStyled } from './style'


const NotFound = () => {

    const history = useHistory()
    const goBackHandler = () => history.push('/')

    return (
        <div>
            <Button text="GoBack" handleClick={goBackHandler}/>
            <NotFoundStyled><span>404</span>Page not found :(</NotFoundStyled>
        </div>
    )
}

export default NotFound
