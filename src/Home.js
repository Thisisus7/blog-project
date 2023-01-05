import BloGList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // initial blogs   initial: [sth, setSth]
    /*
    const [blogs, setBlogs] = useState([  
        { title: 'My new website', body: 'lorem ipsum...', author: 'rick', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Morty', id: 2 },
        { title: 'Leetcode', body: 'lorem ipsum...', author: 'Sarah', id: 3 }
    ]);
    */
   // data: blogs -- In this page, blogs == data
   const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { error && <div> { error }</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BloGList blogs={blogs} title="All Blogs" />}
        </div>
      );
}
 
export default Home;

// map(): create a new array populated with the results of calling a provided function on every element in the calling array