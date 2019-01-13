import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero
      lacus, viverra vel sagittis eget, aliquet vitae diam. Donec id nisi et
      velit commodo pellentesque vitae nec velit. Suspendisse molestie fringilla
      fermentum. Sed ac sapien cursus, dapibus justo sed, porttitor arcu. Sed a
      pretium dolor. Etiam vel metus vitae ex tristique elementum. Curabitur
      lacinia erat tempus nulla suscipit dictum. Donec eu mauris quis turpis
      commodo consectetur. Pellentesque ultrices, diam ut sagittis tincidunt,
      turpis mauris suscipit ligula, sit amet cursus felis neque at risus.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae;
    </p>
  </Layout>
);

export default withRouter(Post);
