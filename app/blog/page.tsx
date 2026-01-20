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
    <div >
      <h1 >Blog Postovi</h1>
      
      <div className="grid gap-6">
        {posts.map(post => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
    </div>
  )
}


// 1. Napravi komponentu <AuthorCard>
// 2. Props: name, bio, avatar (URL ili emoji)
// 3. Napravi stranicu /authors
// 4. Prikaži 3 autora u grid-u