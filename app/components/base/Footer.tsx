import {FC} from "react";
import DateString from '../date';

const Footer: FC = () => {
  return (
    <footer className='bg-black text-white text-right container m-auto'>
      C <DateString/>
    </footer>
  );
}; 


export default Footer;