import {FC} from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const Header: FC = () => {
  const { pathname } = useRouter();
  const isActive = (href, exact) => exact ? pathname === href : pathname.startsWith(href);
  const activeClass = (href,exact=false) => isActive(href,exact) ? 'bg-blue-500':'';
  return (
    <header>
      <nav>
         <ul className='p-2'>
         	<li className='container flex justify-around'>
				<Link href={`/`}>
      				<a className={`bg-black text-white p-1 rounded ${activeClass('/', true)}`}>
      					home
      				</a>
    			</Link>

    			<Link href={`/auth/signin`}>
      				<a className={`bg-black text-white p-1 rounded ${activeClass('/auth/signin')}`}>
      					SignIn
      				</a>
    			</Link>

    			<Link href={`/auth/signup`}>
      				<a className={`bg-black text-white p-1 rounded ${activeClass('/auth/signup')}`}>
      					SignUp
      				</a>
    			</Link>

    			<Link href={`/lalalala`}>
      				<a className='bg-black text-white p-1 rounded'>
      					wrong url
      				</a>
    			</Link>
         	</li>
         </ul>
      </nav>
    </header>
  );
};


export default Header;