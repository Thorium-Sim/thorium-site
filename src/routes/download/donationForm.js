import { h, Component } from "preact";
import style from "./style.scss";
import StripeCheckout from "react-stripe-checkout";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import CurrencyInput from "react-currency-input";

export default class DonationForm extends Component {
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
        (this.state.payment === "multiple" ? 1 / 24 : 1) /
        100
    });
  };
  setSimulators = value => {
    this.setState({
      simulators: value,
      donation:
        this.baseDonations[this.state.usage] *
        value *
        (this.state.payment === "multiple" ? 1 / 24 : 1) /
        100
    });
  };
  setPayment = evt => {
    this.setState({
      payment: evt.target.value,
      donation:
        this.baseDonations[this.state.usage] *
        this.state.simulators *
        (evt.target.value === "multiple" ? 1 / 24 : 1) /
        100
    });
  };
  updateDonation = evt => {
    this.setState({ donation: parseFloat(evt.target.value.replace("$", "")) });
  };
  onToken = charge => {
    const url = this.state.payment === "multiple" ? "subscribe" : "charge";
    fetch(`https://stripe-checkout-ijzduqdvmi.now.sh/${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify({
        stripeToken: charge.id,
        stripeEmail: charge.email,
        amount: Math.round(this.state.donation * 100),
        usage: this.state.usage,
        simulators: this.state.simulators
      })
    })
      .catch(err => {
        console.error("Error:", err);
        alert(
          "Sorry, There was an error processing your payment. Please try again."
        );
      })
      .then(res => this.setState({ donated: true }));
  };
  render() {
    if (this.state.donated) {
      return (
        <div className={style.donationForm}>
          <h2> Thank you for your donation!</h2>
          <p>
            Your donation will go to helping us develop the best simulator
            controls possible. {/*As a token of our appreciation, here are the
            links to where you can download the built version of Thorium:
          </p>
          <ul>
            <li>
              <a href="#">Thorium</a>
            </li>
            {this.state.usage !== "personal" &&
              <li>
                <a href="#">Thorium Kiosk</a>
              </li>}
          </ul>*/}
          You will soon recieve an email with links to download Thorium</p>
        </div>
      );
    }
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
          <h2>
            Suggested {this.state.payment === "multiple" ? "Monthly" : ""}{" "}
            Donation:{" "}
          </h2>
          <CurrencyInput
            decimalSeparator="."
            thousandSeparator=","
            prefix="$"
            className={style.donationInput}
            value={this.state.donation}
            onChangeEvent={this.updateDonation}
          />
          <small>
            You can change your donation to any amount. Donations are{" "}
            <em>not</em> tax exempt.
          </small>
        </div>
        {this.state.donation < 5
          ? <p>We require a minimum donation of $5.00.</p>
          : <StripeCheckout
              token={this.onToken}
              name="Thorium Donation"
              description="Fyreworks LLC"
              panelLabel={`Donate ${this.state.payment === "multiple"
                ? "Monthly"
                : ""}:`}
              currency="USD"
              amount={Math.round(this.state.donation * 100)}
              image="/assets/logo.png"
              stripeKey="pk_live_B64x8t6rLJNzanCWVXOs1pu5"
            ><div className={`${style.button} ${style.personal}`}>Pay With Card</div></StripeCheckout>}
      </div>
    );
  }
}
