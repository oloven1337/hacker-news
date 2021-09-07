import React from 'react'
import PropTypes from 'prop-types'

import { EmojiStyled } from './style'

export const Emoji = ({ src }) => (
    <EmojiStyled>
        <img src={src} alt="Sad emoji :("/>
    </EmojiStyled>
)

Emoji.propTypes = {
    src: PropTypes.string.isRequired
}
