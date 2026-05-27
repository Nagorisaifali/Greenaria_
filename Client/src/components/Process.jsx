
function Process() {

  const steps = [
    "Sign Up",
    "Schedule Pickup",
    "Segregate Waste",
    "Our Team Collects"
  ];

  return (
    <section id="process">

      <div className="container">

        <h2 className="title">
          How It Works
        </h2>

        <div className="features-grid">

          {
            steps.map((step,index)=>(
              <div className="feature-card" key={index}>
                <h1>{index+1}</h1>
                <h3>{step}</h3>
              </div>
            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Process;