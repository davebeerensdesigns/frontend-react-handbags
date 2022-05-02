import React from 'react';

function Menu({label, disableButton, logMessage}) {
    return (
        <button
            type="button"
            onClick={() => console.log({logMessage})}
            disabled={disableButton}
        >
            {label}
        </button>
    );
}

export default Menu;