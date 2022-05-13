import React from 'react';

function Menu({label, disableButton}) {
    return (
        <button
            type="button"
            onClick={() => console.log({label})}
            disabled={disableButton}
        >
            {label}
        </button>
    );
}

export default Menu;