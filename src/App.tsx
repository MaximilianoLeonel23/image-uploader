import Uploader from "./components/Uploader";

const App = () => {
  return (
    <main className="h-screen bg-primary-background">
      <section className="h-full grid place-content-center">
        <Uploader />
      </section>
      <div className="absolute bottom-0 right-0 left-0 w-full text-center py-2">
        <p className="text-primary-gray-4 text-xs font-montserrat">
          created by <span className="font-medium">Maximiliano</span> -
          devChallenges.io
        </p>
      </div>
    </main>
  );
};

export default App;
