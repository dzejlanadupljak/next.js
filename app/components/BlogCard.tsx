import Link from "next/link";

interface BlogCardProps {  ///interface opisuje koje podatke 
// komponenta BlogCard očekuje da primi kao props.
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
  
}

export default function BlogCard({id, title, excerpt, author, date }: BlogCardProps) {
    return(
      <Link href={`/blog/${id}`}>
    <div className="blog-card">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-excerpt">{excerpt}</p>
        <div className="blog-card-footer">
            <span className="blog-card-author">By {author}</span>
            <span className="blog-card-date">{date}</span>

        </div>
    </div>
</Link>
    )
}
    
