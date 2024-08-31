import client from "@/client"

// types.ts
 interface Author {
    name: string;
}

 interface BlogPost {
    title: string;
    date: string;
    content: string;
    image: string; // Use a more specific type if needed (e.g., URL or custom image type)
    author: Author;
}


export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    date,
    content,
    image,
    author->{
      name
    }
  }`
    const params = { slug }
    return await client.fetch<BlogPost | null>(query, params)
}