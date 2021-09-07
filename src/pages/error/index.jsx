import React from 'react'

import { HomeButton } from '../../components/home-button'
import emoji from '../../assets/sad-emoji.png'
import { Emoji } from '../../components/Emoji'
import { ErrorTextStyled } from './style'

export class ErrorComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    render() {
        if (this.state.hasError) {
            return <>
                <HomeButton refresh text={'Refresh page'}/>
                <ErrorTextStyled>
                    <h2>Oops, something is broken, please refresh the page with the F5 button or click
                        the "Refresh page" button</h2>
                    <Emoji src={emoji}/>
                </ErrorTextStyled>
            </>
        }

        return this.props.children
    }
}
