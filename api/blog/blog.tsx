import client from "@/client";

export async function fetchBlogPosts() {
    const query = `*[_type == "post"]{
    title,
    slug,
    body,
    mainImage{
      asset->{
        _id,
        url
      }
    }
  }`;

    const posts = await client.fetch(query);
    return posts;
}