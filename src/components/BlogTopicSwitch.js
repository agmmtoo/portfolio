const Switch = ({ topic, setTopic }) => {
    return (
        <div className="px-5 py-2 lg:py-5 text-lg flex justify-center items-center gap-10 shadow-md dark:bg-blueGray-700">
            <input type="radio" name="topicr" id="techi" value="tech" checked={topic === 'tech'} onChange={e => setTopic(e.target.value)} />
            <label htmlFor="techi">Tech</label>
            <input type="radio" name="topicr" id="booki" value="book" checked={topic === 'book'} onChange={e => setTopic(e.target.value)} />
            <label htmlFor="booki">Book Reviews</label>
        </div>
    );
}

export default Switch;