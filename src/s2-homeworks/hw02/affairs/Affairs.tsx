import React, { Dispatch, SetStateAction } from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const setAll = () => {
        // need to fix
        props.setFilter('all');
    }
    const setHigh = () => {
        // need to fix
        props.setFilter('high');
    }
    const setMiddle = () => {
        // need to fix
        props.setFilter('middle');
    }
    const setLow = () => {
        // need to fix
        props.setFilter('low');
    }

    // альтернатива всем функциям выше
    // const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     props.setFilter(e.currentTarget.value as FilterType)
    // }

    const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')
    // альтернатива всем функциям выше
    // const setClass = (filter: FilterType) => {
    //     return s.button + (props.filter === filter ? '' + s.active : '')
    // }

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div>
            <div className={s.buttonContainer}>
                <button
                    id={'hw2-button-all'}
                    onClick={setAll}
                    className={cnAll}
                >
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={setHigh}
                    className={cnHigh}
                >
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={setMiddle}
                    className={cnMiddle}
                >
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={setLow}
                    className={cnLow}
                >
                    Low
                </button>
                {/* <button onClick={set} className={stepClasses('all')} value={'all'}>All</button>
                <button onClick={set} className={stepClasses('high')} value={'high'}>High</button>
                <button onClick={set} className={stepClasses('middle')} value={'middle'}>Middle</button>
                <button onClick={set} className={stepClasses('low')} value={'low'}>Low</button> */}
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
