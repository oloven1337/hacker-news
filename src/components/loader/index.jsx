import React from 'react'

import { LoaderContainer, LoaderStyled } from './style'
import svg from './img/loader.svg'

export const Loader = () => {
    return (
        <LoaderContainer>
            <LoaderStyled src={svg}/>
        </LoaderContainer>
    )
}


