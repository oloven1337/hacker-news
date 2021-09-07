import React from 'react'

import svg from '../../assets/loader.svg'

import { LoaderContainer, LoaderStyled } from './style'

export const Loader = () => (
    <LoaderContainer>
        <LoaderStyled src={svg}/>
    </LoaderContainer>
)
