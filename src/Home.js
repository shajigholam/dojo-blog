import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
    // destructure the three properties that get back return.
    // we can do -> data: blogs which means grab the data and use blogs name for it.(or we can just change blogs to data)
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}
 
export default Home;

// to run and watch the data using JSON server: 
// npx json-server --watch data/db.json --port 8000