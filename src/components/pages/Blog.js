import BlogPostList from '../BlogPostList';
const Blog = () => {
    return (
        <>
            <div className="py-2">
                <h1>Welcome to my Blog</h1>
                <p>Yep, you read it right!</p>
                <p>And (spoilers alert!) I'm planning to hit you with a fuckload of shitpostings.</p>
            </div>
            <div>
                <BlogPostList />
            </div>
        </>

    );
}

export default Blog;
