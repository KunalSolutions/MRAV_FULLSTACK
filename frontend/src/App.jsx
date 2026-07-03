const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-8">
      <div className="max-w-4xl">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-neutral-500">
          Coming Soon
        </p>

        <h1 className="text-6xl font-light leading-tight text-white md:text-8xl">
          Website 
          <br />
          Under Construction.
        </h1>

        <p className="mt-10 max-w-xl text-lg leading-8 text-neutral-400">
          We're currently working on our new website to provide a better
          experience for our visitors. Thank you for your patience while we
          complete the final touches.
        </p>

        <div className="mt-16 flex items-center gap-4">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          <span className="text-sm text-neutral-500">
            We look forward to welcoming you soon.
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
