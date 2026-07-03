const App = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 px-6">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-3xl text-center">
        <span className="inline-block rounded-full bg-white/5 px-4 py-2 text-sm tracking-wide text-neutral-400">
          COMING SOON
        </span>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white md:text-7xl">
          We're crafting
          <br />
          something beautiful.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
          Our website is currently being refined to deliver a better experience.
          We appreciate your patience and look forward to welcoming you soon.
        </p>

        <div className="mx-auto mt-14 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-white" />
        </div>

        <p className="mt-12 text-sm text-neutral-500">
          Thank you for your patience.
        </p>
      </div>
    </div>
  );
};

export default App;
