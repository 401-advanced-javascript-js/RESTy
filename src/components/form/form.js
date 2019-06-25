import React from 'react';

import('./form.scss');
export default class Form extends React.Component {
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <section>
            <input type="text" name="URL" placeholder="URL" />
            {/* crud buttons */}
            <div id="methods">
              <label>
                <input type="radio" name="method" value="get" />
                <span>GET</span>
              </label>
              <label>
                <input type="radio" name="method" value="post" />
                <span>POST</span>
              </label>
              <label>
                <input type="radio" name="method" value="put" />
                <span>PUT</span>
              </label>
              <label>
                <input type="radio" name="method" value="patch" />
                <span>PATCH</span>
              </label>
              <label>
                <input type="radio" name="method" value="delete" />
                <span>DELETE</span>
              </label>

              <label>
                <button type="submit">Go!</button>
              </label>
            </div>
          </section>

          {/* json input */}
          <section className="deck col-2">
            <div id="body">
              <textarea placeholder="Raw JSON Body" name="requestBody" />
            </div>
          </section>
        </form>
      </section>
    );
  }
}
