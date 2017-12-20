import React from 'react'

const FilterButton = ({ label, onClick }) => {
    return (
        <div className="control">
            <button
                type="button"
                onClick={onClick}
                className="button is-primary is-medium"
            >
                {label}
            </button>
        </div>
    )
}

export default FilterButton
