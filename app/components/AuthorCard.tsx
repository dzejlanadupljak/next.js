interface AuthorCardProps {
    name: string;
    bio: string;
    avatar: string; // URL slike ili emoji
}

export default function AuthorCard({ name, bio, avatar }: AuthorCardProps) {
    return (
        <div className="author-card border p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="author-avatar text-4xl mb-3">
                <img src={avatar} alt={name} className="w-20 h-20 rounded-full object-cover" />
            </div>
            <h3 className="author-name font-semibold text-lg">{name}</h3>
            <p className="author-bio text-gray-600 mt-2">{bio}</p>
        </div>
    );
}
