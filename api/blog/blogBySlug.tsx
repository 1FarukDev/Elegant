import client from "@/client";

export async function fetchBlogPostDetails(slug: string | string[]) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    body,
    publishedAt,
    author->{
      name,
      image{
        asset->{
          _id,
          url
        }
      }
    },
    mainImage{
      asset->{
        _id,
        url
      }
    },
    categories[]->{
      title
    }
  }`;

  const postDetails = await client.fetch(query, { slug });
  return postDetails;
}
