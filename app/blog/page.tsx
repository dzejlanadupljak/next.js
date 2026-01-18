import BlogCard from "../components/BlogCard" 

export default function BlogPage() {
const posts = [
    { id: 1, 
        title: "Prvi članak", 
        excerpt: "Ovo je sažetak prvog članka." ,
author: "Ivan Horvat", 
date: "2024-01-15" 
},
    { id: 2, 
        title: "Drugi članak", 
        excerpt: "Ovo je sažetak drugog članka." ,
author: "Ana Kovač", 
date: "2024-02-20" 
},
    { id: 3, 
        title: "Treći članak", 
        excerpt: "Ovo je sažetak trećeg članka." ,
author: "Marko Marić", 
date: "2024-03-10" 
},
]
return (
    <div className="blogPage">
        <h1 className="blogPage-title">Naš Blog</h1>
        <div className="blogPage-list">
            {posts.map(post=> (
                <div key={post.id} className="blogPage-card">
                    <h2 className="blogPage-card-title">{post.title}</h2>   
                    <p className="blogPage-card-excerpt">{post.excerpt}</p>
                    <div className="blogPage-card-footer">
                        <span className="blogPage-card-author">By {post.author}</span>
                        <span className="blogPage-card-date">{post.date}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

}
// 1. Napravi komponentu <AuthorCard>
// 2. Props: name, bio, avatar (URL ili emoji)
// 3. Napravi stranicu /authors
// 4. Prikaži 3 autora u grid-u