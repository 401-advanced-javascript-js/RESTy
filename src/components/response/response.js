import React from 'react';

export default class Response extends React.Component {
  render() {
    return (
      <div id="json">
        <div className="json-view">
          <div className="json-container">
            <p>Headers:</p>
          </div>
        </div>
        <div className="json-view">
          <div className="json-container">
            <p>Response:</p>
          </div>
        </div>
      </div>
    );
  }
}
