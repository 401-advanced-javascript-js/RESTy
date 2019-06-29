/* eslint-disable react/prop-types */
import React from 'react';

import('./form.scss');

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <section>
            <input type="text" name="URL" placeholder="URL" onChange={this.props.handleURL} />
            {/* crud buttons */}
            <div id="methods">
              <label>
                <input type="radio" name="method" value="get" onChange={this.props.handleMethod} />
                <span>GET</span>
              </label>
              
              <label>
                <input type="radio" name="method" value="post" onChange={this.props.handleMethod} />
                <span>POST</span>
              </label>
              
              <label>
                <input type="radio" name="method" value="put" onChange={this.props.handleMethod} />
                <span>PUT</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="method"
                  value="patch"
                  onChange={this.props.handleMethod}
                />
                <span>PATCH</span>
              </label>
              
              <label>
                <input
                  type="radio"
                  name="method"
                  value="delete"
                  onChange={this.props.handleMethod}
                />
                <span>DELETE</span>
              </label>

              <label>
                <button type="submit">Go!</button>
              </label>
            </div>
          </section>

          {/* json input */}
          <section className="deck">
            <div id="body">
              <textarea placeholder="Raw JSON Body" name="requestBody" />
            </div>
          </section>
        </form>
      </>
    );
  }
}
