import logo from '../Images/Teamflicks.png';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  const navigate = useNavigate();

  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance'];

  return (
    <footer className="left-0 bottom-0 w-full bg-gray-900 text-white py-6">
      <div className="container px-6 flex flex-wrap items-start">
        <img
          src={logo}
          alt="Teamflicks"
          width={150}
          height={150}
          className="object-contain mr-12 pb-12"
        />

        <div className="grid md:grid-cols-3 gap-8 w-full">
          {/* Movies Genre */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Movies Genre</h3>
            <ul>
              {genres.map((g) => (
                <li key={g}>
                  <Link
                    to="/MoviesPage"
                    state={{ scrollTo: g }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/MoviesPage', { state: { scrollTo: g } });
                    }}
                    className="block hover:text-yellow-500"
                  >
                    {g}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscription & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscription & Contact</h3>
            <ul>
              <li>
                <Link to="/subscription" className="block hover:text-yellow-500">Subscribe</Link>
              </li>
              <li>
                <Link to="/support" className="block hover:text-yellow-500">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-sm text-gray-400">
              &copy; 2025 <span className="font-semibold text-yellow-500">TeamFlicks</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;