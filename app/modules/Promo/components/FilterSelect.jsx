import React from 'react'

const FilterSelect = ({ items, onClick }) => {
    return (
        <div className="control is-expanded">
            <div className="select is-fullwidth is-medium">
                <select name="country">
                    {items.map((item, index) => {
                        return (
                            <option key={index} value={item.value} placeholder="Make">
                                {item.label}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default FilterSelect
