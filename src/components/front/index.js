import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style.scss";
import Nav from "../nav";
import Footer from '../footer';

var cardList = [
  {
    station: "Flight",
    cards: [
      { name: "Engine Control" },
      { name: "Thrusters" },
      { name: "Navigation" },
      { name: "Docking" }
    ]
  },
  {
    station: "Communications",
    cards: [
      { name: "Long Range Comm" },
      { name: "Decoding" },
      { name: "Short Range Comm" },
      { name: "Internal Comm" }
    ]
  },
  {
    station: "Operations",
    cards: [
      { name: "Transporters" },
      { name: "Tractor Beam" },
      { name: "Cargo Control" },
      { name: "Stealth Field" }
    ]
  },
  {
    station: "Engineering",
    cards: [
      { name: "Power Distribution" },
      { name: "Reactor Control" },
      { name: "Coolant Control" },
      { name: "Damage Control" },
      { name: "Damage Teams" }
    ]
  },
  {
    station: "Science",
    cards: [
      { name: "Sensors" },
      { name: "Probe Construction" },
      { name: "Probe Network" },
      { name: "Probe Control" }
    ]
  },
  {
    station: "Security",
    cards: [
      { name: "Security Teams" },
      { name: "Deck Control" },
      { name: "Internal Sensors" }
    ]
  },
  {
    station: "Tactical",
    cards: [
      { name: "Targeting" },
      { name: "Phaser Charging" },
      { name: "Shield Control" }
    ]
  },
  {
    station: "Command",
    cards: [{ name: "Alert Condition" }, { name: "Self Destruct" }]
  }
];

export default class Front extends Component {
  state = { top: -60 };
  componentDidMount() {
    requestAnimationFrame(this.getScrollState);
  }
  getScrollState = () => {
    const scrollVal =
      window.scrollY < window.innerHeight
        ? -60
        : window.scrollY - window.innerHeight - 60 < 0
          ? window.scrollY - window.innerHeight - 60
          : 0;
    if (scrollVal !== this.state.top) {
      this.setState({
        top: scrollVal
      });
    }
    requestAnimationFrame(this.getScrollState);
  };
  render() {
    return (
      <div>
        <Nav top={this.state.top} />
        <div className={`${style.fullsize} ${style.hero}`}>
          <img
            src="/assets/logo.png"
            className={style.logo}
            draggable="false"
          />
          <h1>Thorium</h1>
          <h2>Next Generation Starship Simulator Controls</h2>
          <div>
            <a className={`${style.button} ${style.about}`} href="#about">
              About
            </a>
          </div>
          <div>
            <Link
              className={`${style.button} ${style.donate}`}
              href="/download/"
            >
              Download
            </Link>
            <Link
              className={`${style.button} ${style.contribute}`}
              href="/posts"
            >
              Updates
            </Link>
          </div>
        </div>
        <section id="about" className={style.section}>
          <h2>A revolution in simulator controls</h2>
          <div className={style.featureBlock}>
            <div>
              <h3>Mission Timelines</h3>
              <p>
                Not comfortable running the mission by yourself? Thorium comes
                bundled with pre-written missions that remove the endless button
                clicking and lets you focus on what matters - telling a great
                story. It also features a built-in mission editor, allowing you
                to write your own missions.
              </p>
            </div>
            <div>
              <h3>Multi-Platform</h3>
              <p>
                Thorium Server works on Windows, macOS, Linux, and the controls
                work with anything that runs a modern web browser. They'll even
                operate on a electrical switch panel.{" "}
              </p>
            </div>
            <div>
              <h3>Flexible Configuration</h3>
              <p>
                Want to run a small shuttle? Done. Capital Class Carrier? You've
                got it. Any kind of ship you can imagine is possible. Use one of
                the pre-built simulator configurations or make your own!
              </p>
            </div>
            <div>
              <h3>Powerful Analytics</h3>
              <p>
                Thorium remembers every event that happened during a flight,
                giving you access to a wealth of data about your crew which can
                be used for post-mission analysis.
              </p>
            </div>
            <div>
              <h3>Multi-ship Simulations</h3>
              <p>
                Joint simulator missions are first class citizens in Thorium.
                Send messages between simulators, or battle each other in space.
                Collaborative (or competitive) missions are a click away.
              </p>
            </div>
            <div>
              <h3>Open Source</h3>
              <p>
                Do you sling divs? Got code chops? All of the code is available,
                so you can see how it works under the hood and even add your own
                features.
              </p>
            </div>
          </div>
        </section>
        <section className={style.section}>
          <h2>Cards For Every Ship</h2>
          <p>
            Cards control specific functionality for the systems on the ship.
            Each card is hand-crafted to provide the best experience for your
            crew. You can use the suggested stations below, or mix and match
            them to any station you like. And new cards are being added
            regularly to fit whatever needs you might have.
          </p>
          <div className={style.stations}>
            {cardList.map(s =>
              <div className={style.station}>
                <h3>
                  {s.station}
                </h3>
                {s.cards.map(c =>
                  <p key={c.name}>
                    {c.name}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
        <section className={style.section}>
          <h2>A Thriving Community</h2>
          <p>
            Thorium is looking for donors to use the controls in their
            simulators and provide feedback and direction for the controls. As a
            donor, you get instant access to the latest build of the controls, a
            special kiosk application for locking the the computer to only
            Thorium, and priority in feature requests.
          </p>
          <p>
            Interested in becoming a donor? Consider{" "}
            <Link href="/download">Donating</Link>.
          </p>
        </section>
        <Footer />
      </div>
    );
  }
}
