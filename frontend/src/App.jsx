const App = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 px-6">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-3xl text-center">
        
        {/* Subtitle 1 */}
        <span className="inline-block rounded-full bg-white/5 px-4 py-2 text-sm tracking-wide text-neutral-400">
          DOMAIN PROTECTION REQUIRED
        </span>

        {/* Heading */}
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-7xl">
          Website Access
          <br />
          Temporarily Restricted
        </h1>

        {/* Paragraph */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          Website access has been temporarily restricted while security enhancements are being implemented. Services will resume after the maintenance process has been completed
        </p>

        {/* Footer */}
        <p className="mt-12 text-sm text-neutral-500">
          Unable to process requests at this time
        </p>
      </div>
    </div>
  );
};

export default App;
