const Switch = ({ topic, setTopic }) => {
    return (
        <div>
            <p>Select topic:</p>
            <input type="radio" name="topicr" id="techi" value="tech" checked={topic === 'tech'} onChange={e => setTopic(e.target.value)} />
            <label htmlFor="techi">Tech</label>
            <input type="radio" name="topicr" id="booki" value="book" checked={topic === 'book'} onChange={e => setTopic(e.target.value)} />
            <label htmlFor="booki">Book Review</label>
        </div>
    );
}

export default Switch;