import { h, Component } from "preact";
import style from "./style.scss";
import Nav from "../../components/nav";
import StripeCheckout from 'react-stripe-checkout';

export default () =>
  <section>
    <Nav />
    <div className={style.container}>
      <main className={style.content}>
        <h1>Download Thorium</h1>
        <p>
          Thorium is Open Source software, and the source code can be downloaded
          and compiled from the{" "}
          <a href="https://github.com/thorium-sim/thorium">code repository</a>.
          Instructions to build Thorium are included in the repository. Assets
          and content can be collected separately from third-parties.
        </p>
        <button class="button">Get the Code</button>
        <h2>Donation</h2>
        <p>
          Thorium is being developed by a small number of contributors in their
          spare time. Your donations help to create new and exciting features
          and content which you can use in your space center. As a Thorium
          Donor, you recieve the following benefits:
        </p>
        <ul>
          <li>
            Access to a bundled version of Thorium, including content and
            missions from the Farpoint Universe.
          </li>
          <li>Your name in the credits of Thorium.</li>
          <li>A name of your choice added to the ship roster pool.</li>
          <li>
            A warm feeling knowing that you have contributed to creating
            excellent starship simulator software.
          </li>
        </ul>
        <p>Education and Commercial donors get additional benefits:</p>
        <ul>
          <li>Your company's logo on the front page of this website.</li>
          <li>
            A special Kiosk program for Thorium, locking the computer to only
            display Thorium.
          </li>
          <li>Increased priority for feature requests.</li>
        </ul>
        <p>
          Use the donation form to find out your suggested donation based on
          your use-case, or fill in your own amount. Recurring donations are
          also accepted!
        </p>
      </main>
      <aside className={style.sidebar}>
        <h1>Donate</h1>
        <DonationForm />
      </aside>
    </div>
    <div className={style.background} />
  </section>;

class DonationForm extends Component {
  state = {
    usage: "personal",
    simulators: 1
  };
  setUsage = evt => {
    this.setState({
      usage: evt.target.value
    });
  };
  onToken = () => {

  }
  render() {
    var baseDonations = {
      personal: 3000,
      educational: 15000,
      commercial: 200000
    };
    debugger;
    return (
      <form>
        <h2>Select Your Usage Level:</h2>
        <fieldset>
          <label>
            <input
              type="radio"
              name="usage"
              value="personal"
              checked={this.state.usage === "personal"}
              onClick={this.setUsage}
            />{" "}
            Personal
          </label>
          <label>
            <input
              type="radio"
              name="usage"
              value="educational"
              checked={this.state.usage === "educational"}
              onClick={this.setUsage}
            />{" "}
            Educational
          </label>
          <label>
            <input
              type="radio"
              name="usage"
              value="commercial"
              checked={this.state.usage === "commercial"}
              onClick={this.setUsage}
            />{" "}
            Commercial
          </label>
        </fieldset>
        <fieldset>
          <p>
            How many simulators do you intend to run simultaneously (either in
            joint-flights or solo)?
          </p>
          <input
            type="range"
            onChange={evt => {
              this.setState({ simulators: evt.target.value });
            }}
            value={this.state.simulators}
            min="1"
            max="6"
          />
        </fieldset>
        <fieldset>
          <label>
            <input type="radio" /> One-Time Donation: ${baseDonations[
              this.state.usage
            ] *
              this.state.simulators /
              100}
          </label>
          <label>
            <input type="radio" /> Monthly Recurring Donation: ${Math.round(
              baseDonations[this.state.usage] * this.state.simulators / 24
            ) / 100}
          </label>
        </fieldset>
        <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_8UNLvH4kjgqPYyhot5XfwWz6"
      />
      </form>
    );
  }
}
