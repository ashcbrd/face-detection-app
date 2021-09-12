import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3'>
<<<<<<< HEAD
                {`${name}, your current entry count is...`}
=======
                {`${name}, your current rank is...`}
>>>>>>> 3a38ed994c13f9cd6e13cdb30155f67a2e6b9c9a
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;