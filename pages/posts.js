import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });
function Posts({posts}){
    return(
        <main className={inter.className}>
            <h1>Posts</h1>
        </main>
    )
}
Posts.getInitialProps = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const {data} = res;
    console.log(data)
    return {posts: data}
}

export default Posts;