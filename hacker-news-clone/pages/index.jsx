import fetch from "isomorphic-unfetch";
import Error from "next/error";
import Link from "next/link";
import Layout from "../components/Layout";
import StoryList from "../components/StoryList";

export default class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;

    try {
      page = Number(query.page) || 1;

      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );

      stories = await response.json();
    } catch (error) {
      console.log(error);

      stories = [];
    }

    return { stories, page };
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker register success", registration);
        })
        .catch(err => {
          console.log("service worker register fail", err.message);
        });
    }
  }

  render() {
    const { stories, page } = this.props;

    if (!stories.length) {
      return <Error status={503} />;
    }

    return (
      <Layout title="Hacker Clone" description="A hacker news clone">
        <StoryList stories={stories} />

        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>

        <style jsx>{`
          footer {
            padding: 1em;
          }
          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    );
  }
}
