//  import React from 'react'

const Header = ({ title }) => {
    // const headerStyle = {

    //     backgroundColor: 'black',
    //     color: '#fff',
    //     fontSize: '18px',
    //     fontWeight: 'bold'
    // };


    return ( <
        header >
        <
        h1 > { title } < /h1>  < /
        header >
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;