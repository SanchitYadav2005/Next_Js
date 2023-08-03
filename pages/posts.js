import { Inter } from "next/font/google";
import axios from "axios";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
function Posts({posts}){
    return(
        <main className={inter.className}>
            <h1>Posts</h1>
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>
                        <Link href="#">{post.title}</Link>
                    </li>
                ))}
            </ul>
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