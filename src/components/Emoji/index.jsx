import React from 'react'
import { EmojiStyled } from './style'

export const Emoji = ({ src }) => {
    return (
        <EmojiStyled>
            <img src={src} alt="Sad emoji :("/>
        </EmojiStyled>
    )
}
