import { Link } from '@tanstack/react-router'
import { ROUTES } from '@/configs/routesConfig'

const Header: React.FC = () => {
  return (
    <header className="bg-red-400 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">

        <Link to={ROUTES.HOME} className="text-2xl font-bold hover:text-red-200 transition-colors cursor-pointer">
          PostsApp
        </Link>

        <input
          name="search"
          type="text"
          placeholder="Search posts..."
          className="
            w-80
            cursor-pointer
            px-3
            py-2
            rounded-md
            text-black
            focus:outline-none
            focus:ring-2
            focus:ring-white
          "
        />

      </div>
    </header>
  );
}

export default Header;
