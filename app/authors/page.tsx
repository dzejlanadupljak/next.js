import AuthorCard from '../components/AuthorCard';

export default function AuthorsPage() {
    const authors = [
        { name: 'Marko Marković', bio: 'Frontend developer i ljubitelj React-a', avatar: '🖥️' },
        { name: 'Ana Anić', bio: 'UI/UX dizajnerka i kreatorka lepih interfejsa', avatar: 'https://i.pravatar.cc/150?img=2' },
        { name: 'Jovan Jovanović', bio: 'Fullstack developer i bloger', avatar: '👨‍💻' },
    ];

    return (
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Autori</h1>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                {authors.map((author) => (
                    <AuthorCard 
                        key={author.name} 
                        name={author.name} 
                        bio={author.bio} 
                        avatar={author.avatar} 
                    />
                ))}
            </div>
        </div>
    );
}
