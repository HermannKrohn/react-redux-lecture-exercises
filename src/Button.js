import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps= state => {
    return {
      //  count: state.count
    }
}

const mapDispatchToProps = {
    inc: () => {
        return {
            type: 'INCREMENT_COUNT'
        }
    }
}

export const Button =  connect(mapStateToProps, mapDispatchToProps)(props => (
    <button onClick={props.inc}>Increase Count</button>
))