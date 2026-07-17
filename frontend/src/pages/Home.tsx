import ModelButton from "../components/ModelButton";


function Home() {

  return (

    <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
      <h1>ML Playground</h1>

      <p className="text-l">
        Understand how classical ML algorithms learn, make predictions, and evaluate performance. 
      </p>

      <p className="text-l">
        Pick a model to start exploring!
      </p>

      <div className="flex flex-row justify-center gap-6">
        <ModelButton
          title="K Nearest Neighbors"
          link="/linear-regression"
        />

        <ModelButton
          title="Decision Tree"
          link="/linear-regression"
        />

        <ModelButton
          title="Linear Regression"
          link="/linear-regression"
        />
      </div>

    </div>
  );
}


export default Home;