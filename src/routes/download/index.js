import { h } from "preact";
import style from "./style.scss";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import DonationForm from "./donationForm";

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
        <a
          href="https://github.com/thorium-sim/thorium"
          class={`${style.button} ${style.personal}`}
        >
          Get the Code
        </a>
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
        <p>Your donation will go towards several great causes: </p>
        <ul>
          <li>Making new features and content for Thorium</li>
          <li>Keeping Thorium updates free</li>
          <li>
            The{" "}
            <a href="https://github.com/webdev-guild/webdev-guild">
              WebDev Guild
            </a>, a club for middle school students to learn web development
            skills
          </li>
        </ul>
        <p>
          Use the donation form to find out your suggested donation based on
          your use-case, or fill in your own amount. Recurring donations are
          also accepted and encouraged!
        </p>
        <p>
          If you have any problems with your donation, need to cancel your
          subscription or want to request a refund, please{" "}
          <a href="mailto:contact@thoriumsim.com">contact us</a>.
        </p>
      </main>
      <aside className={style.sidebar}>
        <h1>Donate</h1>
        <DonationForm />
      </aside>
    </div>
    <Footer />
    <div className={style.background} />
  </section>;
