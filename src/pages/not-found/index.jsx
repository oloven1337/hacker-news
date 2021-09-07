import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components'

import { NotFoundStyled } from './style'

export const NotFound = () => {
    const history = useHistory()
    const backHandler = React.useCallback(() => {
        history.push('/')
    }, [history])

    return (
        <>
            <Button text="Back" handleClick={backHandler}/>
            <NotFoundStyled><span>404</span>Page not found :(</NotFoundStyled>
        </>
    )
}
