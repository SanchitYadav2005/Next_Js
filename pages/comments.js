import axios from "axios";
import styles from '../styles/basic.module.css';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function Comments({comm}){
    return(
        <main className={inter.className}>
            <h1 className={styles.secondaryHeading}>

            █████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░██████████░░░░░░█░░░░░░██████████░░░░░░█░░░░░░░░░░░░░░█░░░░░░██████████░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░░░░░░░░░░░░░▄▀░░█░░▄▀░░░░░░░░░░░░░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░░░░░░░░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█░░▄▀░░░░░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░█░░░░░░▄▀░░░░░░█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░▄▀░░░░░░▄▀░░█░░▄▀░░░░░░▄▀░░░░░░▄▀░░█░░▄▀░░█████████░░▄▀░░░░░░▄▀░░██░░▄▀░░█████░░▄▀░░█████░░▄▀░░█████████
█░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█████░░▄▀░░█████░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█████░░▄▀░░█████░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░██░░░░░░██░░▄▀░░█░░▄▀░░██░░░░░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█████░░▄▀░░█████░░░░░░░░░░▄▀░░█
█░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░██████████░░▄▀░░█░░▄▀░░██████████░░▄▀░░█░░▄▀░░█████████░░▄▀░░██░░▄▀░░░░░░▄▀░░█████░░▄▀░░█████████████░░▄▀░░█
█░░▄▀░░░░░░░░░░█░░▄▀░░░░░░▄▀░░█░░▄▀░░██████████░░▄▀░░█░░▄▀░░██████████░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░█████░░▄▀░░█████░░░░░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██████████░░▄▀░░█░░▄▀░░██████████░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██░░░░░░░░░░▄▀░░█████░░▄▀░░█████░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░██████████░░░░░░█░░░░░░██████████░░░░░░█░░░░░░░░░░░░░░█░░░░░░██████████░░░░░░█████░░░░░░█████░░░░░░░░░░░░░░█
█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████</h1>
            <ul className={styles.comList}>
                {comm.map(com=>(
                    <li data-icon="⭐" className={styles.lis} key={com.id}>{com.body}</li>
                ))}
            </ul>
        </main>
    )
}

Comments.getInitialProps = async ({query}) =>{
    const {id} = query;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const {data} = res;
    return {comm: data};
}

export default Comments;