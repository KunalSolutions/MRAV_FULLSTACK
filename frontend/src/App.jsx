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

        {/* Subtitle 2 */}
        <p className="mt-4 text-sm tracking-widest text-neutral-500 uppercase">
          SECURITY STATUS: AT RISK
        </p>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Website Access
          <br />
          Temporarily Restricted
        </h1>

        {/* Paragraph */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
          This domain has been flagged by automated security systems due to potential vulnerability risks. To ensure safety and prevent unauthorized access, protection measures have been applied and website access is temporarily restricted. Full access will be restored once domain protection verification is completed.
        </p>

        {/* Loader line */}
        <div className="mx-auto mt-14 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-white" />
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-neutral-500">
          Unable to process requests at this time
        </p>
      </div>
    </div>
  );
};

export default App;
