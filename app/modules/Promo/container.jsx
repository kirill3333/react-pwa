import React, { Component } from 'react'
import Background from './components/Background'
import FilterContainer from './components/FilterContainer'
import FilterSelect from './components/FilterSelect'
import FilterButton from './components/FilterButton'
// const Background = require('../../assets/bg.jpg')

export class PromoContainer extends Component {
    render() {
        return (
            <Background>
                <FilterContainer>
                    <FilterSelect items={[{ value: 'Make', label: 'Make' }]} />
                    <FilterSelect items={[{ value: 'Model', label: 'Model' }]} />
                    <FilterButton label='Search' />
                </FilterContainer>
            </Background>
        )
    }
}
