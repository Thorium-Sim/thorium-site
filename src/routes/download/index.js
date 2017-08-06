import { h } from "preact";
import style from "./style.scss";
import Nav from "../../components/nav";

export default () =>
  <section>
    <Nav />
    <div className={style.container}>
      <h1>Download Thorium</h1>
      <p>
        Thorium is Open Source software, and the source code can be downloaded
        and compiled from the{" "}
        <a href="https://github.com/thorium-sim/thorium">code repository</a>.
        Instructions to build Thorium are included in the repository. Assets and
        content can be collected separately from third-parties.
      </p>
      <button class="button">Get the Code</button>
      <h2>Donation</h2>
      <p>
        Thorium is being developed by a small number of contributors in their
        spare time. Your donations help to create new and exciting features and
        content which you can use in your space center. As a Thorium Donor, you
        recieve the following benefits:
      </p>
      <ul>
        <li>
          Access to a bundled version of Thorium, including content and missions
          from the Farpoint Universe.
        </li>
        <li>Your name in the credits of Thorium.</li>
        <li>A name of your choice added to the ship roster pool.</li>
        <li>
          A warm feeling knowing that you have contributed to creating excellent
          starship simulator software.
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
    </div>
    <div className={style.background} />
  </section>;
