import React from 'react';

function Loader() {
    return (
      <div>
            <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
            </button>
      </div>
    );
  }
  
  export default Loader;
  