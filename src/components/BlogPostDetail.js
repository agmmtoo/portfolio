import { Link, useParams } from 'react-router-dom';
import { toTitle } from '../formatter';
import Fetch from './hooks/Fetch';
import ReactMarkdown from 'react-markdown';

const BlogPostDetail = () => {
    const { folder, title } = useParams();
    const Title = toTitle(title);
    return (
        <div className="blog-post">
            <Link to={`/blog`}>{folder}</Link> &gt; {title}
            <hr />
            <Fetch
                url={`https://raw.githubusercontent.com/agmyintmyatoo/BlogPosts/main/${folder}/${Title}`}
                renderData={renderMarkdown}
            />
        </div>
    )
};

const renderMarkdown = data => {
    console.log(data);
    const { data: md } = data;
    return (
        <ReactMarkdown children={md} />
    );
}

export default BlogPostDetail;