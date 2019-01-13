import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

export default class About extends Component {
  static async getInitialProps() {
    const response = await fetch("https://api.github.com/users/TowhidKashem");
    const statusCode =
      response.status && response.status > 200 ? response.status : false;
    const user = await response.json();
    return { statusCode, user };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="" width="200" />
        <br />
        <img src="/static/js-logo.png" alt="" width="200" />
      </Layout>
    );
  }
}
