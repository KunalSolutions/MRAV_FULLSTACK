const App = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0%,#000_60%)]"></div>

      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:p-16">
        <div className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm tracking-widest text-gray-400 uppercase">
          Website Coming Soon
        </div>

        <h1 className="mt-8 text-center text-5xl font-bold leading-tight text-white md:text-7xl">
          Something Amazing
          <br />
          is on the way.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-gray-400">
          Our team is putting the finishing touches on a brand-new digital
          experience. Thank you for your patience—we can't wait to share it
          with you.
        </p>

        {/* Progress */}
        <div className="mx-auto mt-14 max-w-md">
          <div className="mb-3 flex items-center justify-between text-sm text-gray-500">
            <span>Development Progress</span>
            <span>Launching Soon</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-3/4 animate-pulse rounded-full bg-gradient-to-r from-white via-gray-300 to-white"></div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
