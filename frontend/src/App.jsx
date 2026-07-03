const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
          Coming Soon
        </p>

        <h1 className="mt-6 text-5xl font-bold text-gray-900 md:text-7xl">
          Website Under Construction
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          We're currently working on our new website to provide a better
          experience for our visitors. Thank you for your patience while we
          complete the final touches.
        </p>

        <div className="mx-auto mt-12 h-1 w-48 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gray-900"></div>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          We look forward to welcoming you soon.
        </p>
      </div>
    </div>
  );
};

export default App;
