import { useParams } from 'react-router-dom';
import { toTitle } from '../formatter';

const BlogPostDetail = () => {
    const { title } = useParams();
    const Title = toTitle(title);
    return (
        <p>fetch post and parse markdown here using {Title}</p>
    )
};

export default BlogPostDetail;