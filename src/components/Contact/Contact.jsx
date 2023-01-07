import "./Contact.css";
import Navigation from "../Navigation/Navigation";

function Contact() {
  return (
    <section>
      <Navigation />;
      <div className="contenedor-form rounded">
        <h3>Contact</h3>
        <h4>Leave us your information so we can cantact you</h4>
        <form className="container-fluid">
          <div className="row">
            <div className="mb-3 col-lg-6 col-sm-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3 col-lg-6 col-sm-6">
              <label htmlFor="exampleFormControlInput12" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput13"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea14"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea15"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-form"> Sign in</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
