import React from 'react';

const Jumbotron = React.memo(props => {
    const {text} = props
        return (
            <>
              <div className="lable-jumbotron animate__animated animate__fadeInDown">
                  {text}
              </div>
            </>
        )
});

export default Jumbotron