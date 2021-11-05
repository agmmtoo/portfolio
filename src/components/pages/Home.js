const Home = () => (
    <>
        <div className="m-5 flex flex-row flex-wrap rounded-md shadow-md justify-center" >
            <img
                src="https://github.com/agmyintmyatoo.png"
                alt="ammo"
                className="m-5 rounded-full lg:rounded-xl shadow-md w-5/12 max-w-sm"
            />
            <div className="w-full lg:w-1/2 p-5 lg:self-center">
                <p>Hello, <span className="emp">AMMO</span> here!</p>
                <br />
                <p>I'm a fourth year Computer Science student at <a className="emp" href="https://ucsy.edu.mm">UCSY</a>.
                    I can code well in <span className="emp">Python</span> and <span className="emp">JS</span>, altogether with <span className="emp">Django</span> and <span className="emp">React</span>.
                    Along with software engineering background, I've touched <span className="emp">Java</span>, <span className="emp">C#</span>.
                </p>
            </div>

            <footer className="flex-shrink-1 max-w-xs flex w-full p-2 justify-around">
                <a href="https://twitter.com/agmyintmyatoo">Twitter</a>
                <a href="https://github.com/agmyintmyatoo">Github</a>
                <a href="mailto:solidifyarmor@gmail.com">Mail</a>
            </footer>
        </div>
    </>
);

export default Home;