import React from 'react';
import Logo from '../../images/logo512.png';
import PropTypes from 'prop-types';
import './Icon.scss';

const Icon = (props) => {
    return (
        <div {...props}>
            <img src={Logo} alt='logo' />
        </div>
    )
}

Icon.propTypes = {
    className: PropTypes.string
};

Icon.defaultProps = {
    className: 'icon'
};


export default Icon;