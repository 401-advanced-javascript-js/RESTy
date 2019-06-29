import React from "react";
import ReactJSON from "react-json-view";
import superagent from "superagent";

import Header from "./components/header/header";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";

import("./app.scss");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: "",
      method: "",
      response: {
        Headers: {},
        Response: {}
      }
    };
  }

  handleURL = event => {
    this.setState({ URL: event.target.value });
  };

  handleMethod = event => {
    this.setState({ method: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const result = await superagent(this.state.method, this.state.URL);
    // console.log(result.body.results);
    this.setState({ response: result });
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <section>
            <Form
              handleURL={this.handleURL}
              handleMethod={this.handleMethod}
              handleSubmit={this.handleSubmit}
            />
            <div id="json">
              <ReactJSON src={this.state.response} />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
