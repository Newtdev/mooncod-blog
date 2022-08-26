import Content from "../../components/blogpost/Content";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
import { useRouter } from "next/router";
import { usePreviewSubscription } from "../../lib/sanity";

const allDataQuery = groq`*[_type =='post']{_id,title,description,poster,slug,author}`;

const postQuery = groq`
*[_type == "post" && slug.current == $slug][0]{Post,title,_id,description,poster,slug,_createdAt,author}`;

const FetchData = async (preview) => {
  const data = await getClient(preview).fetch(allDataQuery);
  return data;
};

function ArticleContent({ preview, data, blogData }) {
  const router = useRouter();
  const { data: post } = usePreviewSubscription(postQuery, {
    params: { article: data.post?.slug },
    initialData: data.post,
    enabled: preview && data.post?.slug,
  });

  if (!router.isFallback && !data.post?.slug) {
    return;
  }

  return <Content post={post} blog={blogData} />;
}

// export async function getStaticProps({ params, preview = false }) {
//   const blogData = await FetchData(preview);
//   const post = await getClient(preview).fetch(postQuery, {
//     slug: params.article,
//   });

//   return {
//     props: { preview, data: { post }, blogData },
//   };
// }

// export async function getStaticPaths() {
//   const postPaths = await getClient().fetch(
//     groq`*[_type == "post" && defined(slug.current)][].slug.current`
//   );
//   const paths = postPaths.map((article) => ({
//     params: { article: article },
//   }));
//   return {
//     // paths,
//     paths,
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params, preview = true }) {
  const blogData = await FetchData(preview);
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.article,
  });

  if (!post) {
    return {
      post: [],
      notFound: true,
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { data: { post }, blogData },
  };
}

export default ArticleContent;
