import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
function Home() {

  const router = useRouter();

  const handleClick =()=> {
    console.log('placing your order');
    router.push('/product');
  }
  
  return (
    <div className={styles.container}>
      <h1>Hi from index page</h1>
      <ul>
        <li><Link href='/blog'>
        <a>Blog</a>
        </Link>
        </li>
      <li>
        <Link href='/product'>
        <a>Product</a>
        </Link>
        </li>
        <li>
          <Link href='/posts'>
            <a>Posts</a>
          </Link>
        </li>
      </ul>
      <Link href='/users'>
        <a>Users</a>
      </Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  )
}

export default Home