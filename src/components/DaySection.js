import React from 'react'
import classNames from 'classnames'

export default function DaySection () {
    return (
        <div className={classNames({'daysPosition':true })}>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
            <div>Sunday</div>
            <div>Everyday</div>
        </div>
    )
}