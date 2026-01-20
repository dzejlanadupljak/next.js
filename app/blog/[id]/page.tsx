interface Post {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
}

const posts: Post[] = [
    { id: 1, title: "Prvi članak", excerpt: "Ovo je sažetak prvog članka.Koji je malo duži da bi se videlo kako izgleda u kartici.", author: "Ivan Horvat", date: "2024-01-15" },
    { id: 2, title: "Drugi članak", excerpt: "Ovo je sažetak drugog članka.Ovo ce biti malo duže da bismo videli kako izgleda u kartici.", author: "Ana Kovač", date: "2024-02-20" },
    { id: 3, title: "Treći članak", excerpt: "Ovo je sažetak trećeg članka.Ovaj clanak ima duzi sadrzaj da bismo videli kako izgleda u kartici.", author: "Marko Marić", date: "2024-03-10" }
];

interface BlogPageProps {
    params: Promise<{ id: string }>; // promise
}

// FUNKCIJA MORA BITI ASYNC AKO KORISTIMO AWAIT
export default async function BlogPostPage({ params }: BlogPageProps) {
    const { id } = await params;  // čekamo da promise bude rešen
    const postId = parseInt(id);
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return (
            <div>
                <h1>Članak nije pronađen</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <p>Autor: {post.author}</p>
            <p>Datum: {post.date}</p>
        </div>
    );
}
