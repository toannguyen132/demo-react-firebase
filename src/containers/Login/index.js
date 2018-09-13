import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { editText } from './actions';

class Login extends React.PureComponent {
    render() {
        const { text, editText } = this.props;

        const onclick = (e) => {
            e.preventDefault()
            editText('new text')
        }
        return (
            <div>
                this is login container <br />
                this is editable text {text}

                <button onClick={onclick}>change me</button>
            </div>
        )
    }
}

Login.propTypes = {
}

// map state
const mapStateToProps = state => {
    return {
        ...state.login
    }
}

// map dispatch
const mapDispatchToProps = dispatch => ({
    editText: text => dispatch(editText(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)