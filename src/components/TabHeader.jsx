import React from 'react'

export const TabHeader = ({tab, onChangeStatus, status}) => {
    return (
        <a
            href="#"
            onClick={() => onChangeStatus(tab.id)}
            className={tab.id === status ? "active" : ''}
        >
            {tab.title}
        </a>
    )
}
