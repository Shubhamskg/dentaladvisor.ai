import React from 'react';

function VoiceRecorderButton({ onClick, ...otherProps }) {
  return (
    <button type="button" onClick={onClick} {...otherProps}>
      <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" className="AeYb4d NMm5M"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z"></path><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path></svg>
    </button>
  );
}

export default VoiceRecorderButton;