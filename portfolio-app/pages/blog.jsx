import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title, slug }) => (
  <li>
    <Link href={`/post?title=${title}`} as={`/${slug}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout title="Blog">
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="react-post" title="Angular Post" />
      <PostLink slug="react-post" title="Vue Post" />
    </ul>
  </Layout>
);
