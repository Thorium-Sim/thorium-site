import { h, Component } from "preact";
import style from "./style.scss";
import Nav from "../../components/nav";
import StripeCheckout from "react-stripe-checkout";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import CurrencyInput from "react-currency-input";

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
          also accepted and encouraged!
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
    simulators: 1,
    payment: "once",
    donation: 30
  };
  baseDonations = {
    personal: 3000,
    educational: 15000,
    commercial: 200000
  };
  setUsage = evt => {
    this.setState({
      usage: evt.target.value,
      donation:
        this.baseDonations[evt.target.value] *
        this.state.simulators *
        (this.state.payment === "multiple" ? 1 / 24 : 1) / 100
    });
  };
  setSimulators = value => {
    this.setState({
      simulators: value,
      donation:
        this.baseDonations[this.state.usage] *
        value *
        (this.state.payment === "multiple" ? 1 / 24 : 1) / 100
    });
  };
  setPayment = evt => {
    this.setState({
      payment: evt.target.value,
      donation:
        this.baseDonations[this.state.usage] *
        this.state.simulators *
        (evt.target.value === "multiple" ? 1 / 24 : 1) / 100
    });
  };
  onToken = (charge) => {
    fetch('https://12usj3vwf1.execute-api.us-east-1.amazonaws.com/prod/StripeCheckout', {
      method: 'POST',
      mode: 'cors',
      body: {
        stripeToken: charge.id,
        amount: Math.round(this.state.donation * 100)
      }
    }).then(res => console.log('Charge Complete:', res))
  };
  render() {
    return (
      <div className={style.donationForm}>
        <div className={style.section}>
          <h2>Usage:</h2>
          <button
            className={`${style.button} ${style.personal} ${this.state.usage ===
            "personal"
              ? style.active
              : ""}`}
            onClick={this.setUsage}
            name="usage"
            value="personal"
          >
            Personal
          </button>{" "}
          <button
            className={`${style.button} ${style.educational} ${this.state
              .usage === "educational"
              ? style.active
              : ""}`}
            onClick={this.setUsage}
            name="usage"
            value="educational"
          >
            Educational
          </button>
          <button
            className={`${style.button} ${style.commercial} ${this.state
              .usage === "commercial"
              ? style.active
              : ""}`}
            onClick={this.setUsage}
            name="usage"
            value="commercial"
          >
            Commercial
          </button>
        </div>
        <div className={style.section}>
          {this.state.usage === "personal" &&
            <p>
              <strong>Personal: </strong>You plan on using Thorium every now and
              then with a few friends to do some bridge simulation or 'Space
              LARP-ing'. You don't charge money or advertise - you just want to
              have a good time.
            </p>}
          {this.state.usage === "educational" &&
            <p>
              <strong>Educational: </strong>You are a school or educator that
              wants to use Thorium to give your students a Space Edventure! You
              might run field trips for other schools and might charge for the
              cost of the flights, but you don't advertise or run paid flights
              for private parties. You just want to see your students excel!
            </p>}
          {this.state.usage === "commercial" &&
            <p>
              <strong>Commercial: </strong>You run flights of all kinds -
              birthday parties, corporate training, family reunions, summer
              camps - the whole gamut. You want to give your customers the most
              exciting, inspiring experience possible (for an affordable price).
            </p>}
        </div>
        <div className={style.section}>
          <h2>Simulators: </h2>
          <p>
            How many simulators do you intend to run simultaneously (either in
            joint-flights or solo)?
          </p>
          <div className={style.inputRange}>
            <InputRange
              maxValue={6}
              minValue={1}
              value={this.state.simulators}
              onChange={this.setSimulators}
            />
          </div>
        </div>
        <div className={style.section}>
          <h2>Payments: </h2>
          <button
            className={`${style.button} ${style.educational} ${this.state
              .payment === "once"
              ? style.active
              : ""}`}
            onClick={this.setPayment}
            value="once"
          >
            One-Time Donation
          </button>
          <button
            className={`${style.button} ${style.commercial} ${this.state
              .payment === "multiple"
              ? style.active
              : ""}`}
            onClick={this.setPayment}
            value="multiple"
          >
            Monthly Recurring Donation
          </button>
        </div>
        <div className={style.section}>
          <h2>Suggested {this.state.payment === 'multiple' && 'Monthly'} Donation: </h2>
          <CurrencyInput
            decimalSeparator="."
            thousandSeparator=","
            prefix="$"
            className={style.donationInput}
            value={this.state.donation}
            onChange={evt => this.setState({ donation: evt.target.value })}
          />
        </div>
        <StripeCheckout
          token={this.onToken}
          name="Thorium Donation"
          description="Fyreworks LLC"
          panelLabel={`Donate ${this.state.payment === 'multiple' && 'Monthly'}:`}
          currency="USD"
          amount={Math.round(this.state.donation * 100)}
          image="/assets/logo.png"
          stripeKey="pk_test_8UNLvH4kjgqPYyhot5XfwWz6"
        />
      </div>
    );
  }
}
