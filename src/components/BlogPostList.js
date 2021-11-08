import { useState } from 'react';
import Switch from './BlogTopicSwitch';
import Fetch from './hooks/Fetch';

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
    return list.map(({
        name: title,
        download_url,
        sha,
        size
    }) => (
        <div key={sha}>
            <a href={download_url}>{title}</a>
        </div>
    ))
};

export default BlogPostList;