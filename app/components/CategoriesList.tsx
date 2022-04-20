import { FC } from "react";
import Link from "next/link";
import { VscDebugBreakpointFunction } from "react-icons/vsc";

interface Category {
  name: string;
  id: number;
}

interface IProps {
  categories: Category[];
}

export const CategoriesList: FC<IProps> = ({ categories }) => (
  <nav>
    {categories.map((cat) => (
      <Link href={`/categories/${cat.id}`} key={cat.id}>
        <button className="text-sm font-bold  bg-slate-900 text-white mx-2 rounded p-4">
          <VscDebugBreakpointFunction />
          {cat.name}
        </button>
      </Link>
    ))}
  </nav>
);
