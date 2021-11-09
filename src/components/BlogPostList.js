import { useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from './BlogTopicSwitch';
import Fetch from './hooks/Fetch';
import { toSlug } from '../formatter';

const REPONAME = 'BlogPosts';
const url = `https://api.github.com/repos/agmyintmyatoo/${REPONAME}/contents`;

const BlogPostList = () => {
    const [topic, setTopic] = useState('tech');
    return (
        <>
            <Switch topic={topic} setTopic={setTopic} />
            <Fetch
                url={`${url}/${topic}`}
                renderData={renderPostList}
            />
        </>
    );
};

// render function to pass to Fetch hook
// have to rename 'name' props to 'title' because 'name' is depricated here
const renderPostList = ({ data: list }) => {
    console.log(list);
    return (
        <div className="my-5 mx-1 flex flex-col items-center gap-1">
            {list.map(({
                name: title,
                download_url,
                path,
                sha,
                size
            }) => (
                <div key={sha} className="w-full p-2 rounded hover:text-gray-400">
                    <Link to={`/blog/${path.split('/')[0]}/${toSlug(title)}`}>
                        {title.slice(0, title.length - 3)}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogPostList;