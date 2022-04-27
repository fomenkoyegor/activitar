import {FC} from "react";
import Link from "next/link";

interface IProps {
	text?: string;
	href?: string;
}


const CastomLink: FC<IProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
};

export default CastomLink;