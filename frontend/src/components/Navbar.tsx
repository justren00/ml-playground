function Navbar() {
  return (
    <nav className="min-w-screen flex justify-between items-center px-8 py-4 border-b">
      <h2 className="text-2xl font-bold">
        ML Playground
      </h2>

      <div className="flex gap-6">
        <a href="/" className="hover:text-blue-500">
          Home
        </a>

        <a href="/algorithms" className="hover:text-blue-500">
          Algorithms
        </a>

        <a href="/about" className="hover:text-blue-500">
          About
        </a>
      </div>
    </nav>
  );
}

export default Navbar;