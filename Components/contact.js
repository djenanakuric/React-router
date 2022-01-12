import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


const Contact = (props) => {
    console.log(props.cards);

    return (
        <div>
            <div className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
                <Link to='/alex' className="ui header">Alex</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adioliscing elit,....</p>
            </div>

            <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
                <Link to='/willma' className="ui header">Willma</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adioliscing elit,....</p>

            </div>
        </div >
    )
}

const mapStatToProps = (state) => {
    return {
        cards: state.cards
    }
}
export default connect(mapStatToProps)(Contact);
