import { useParams } from 'react-router-dom';
import { toTitle } from '../formatter';
import Fetch from './hooks/Fetch';
import ReactMarkdown from 'react-markdown';

const BlogPostDetail = () => {
    const { folder, title } = useParams();
    const Title = toTitle(title);
    return (
        <Fetch
            url={`https://raw.githubusercontent.com/agmyintmyatoo/BlogPosts/main/${folder}/${Title}`}
            renderData={renderMarkdown}
        />
    )
};

const renderMarkdown = ({ data }) => {
    console.log(data);
    return (
        <ReactMarkdown children={data} />
    );
}

export default BlogPostDetail;