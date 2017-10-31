import { h, Component } from "preact";
import { request } from "graphql-request";
import Nav from "../nav";
import Footer from "../footer";

const graphQLURL = "https://us-west-2.api.scaphold.io/graphql/thorium";
const query = `query GetCustomer($email: String) {
  viewer {
    allCustomers(where:{email:{eq:$email}}){
      edges {
        node {
          email
        }
      }
    }
  }
}`;

export default class Prerelease extends Component {
  state = { access: false };
  access = () => {
    const { email } = this.state;
    request(graphQLURL, query, { email }).then(data => {
      if (data.viewer.allCustomers.edges.length > 0) {
        this.setState({
          access: true
        });
      }
    });
  };
  render() {
    return <div>
        <Nav />
        <div style={{ margin: "90px", minHeight: "calc(100vh - 90px)" }}>
          {this.state.access ? <div>
              <h1>Prerelease Builds:</h1>
              <ul>
                <li>
                  Alpha 21 <ul>
                    <li>
                      <a href="https://s3.amazonaws.com/thoriumsim/thorium-server-macos-a21.zip">
                        macOS
                      </a>
                    </li>
                    <li>
                      <a href="https://s3.amazonaws.com/thoriumsim/thorium-server-win.exe-a21.zip">
                        Windows
                      </a> - Note: There is a known issue with the Windows build. You must create a folder called {`{1}`} in the <code>\AppData\Local</code> folder.
                    </li>
                    <li>
                      <a href="https://s3.amazonaws.com/thoriumsim/thorium-server-linux-a21.zip">
                        Linux
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Alpha 18 <ul>
                    <li>
                      <a href="https://s3.amazonaws.com/thoriumsim/thorium-server-macos-a18.zip">
                        macOS
                      </a>
                    </li>
                    <li>
                      <a href="https://s3.amazonaws.com/thoriumsim/thorium-server-win.exe-a18.zip">
                        Windows
                      </a> - Note: There is a known issue with the Windows build. You must create a folder called {`{1}`} in the <code>\AppData\Local</code> folder.
                    </li>
                    <li>
                      <a href="https://s3.amazonaws.com/thoriumsim/thorium-server-linux-a18.zip">
                        Linux
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Alpha 17 <ul>
                    <li>
                      <a href="https://s3.amazonaws.com/thoriumsim/thorium-server-macos-a17.zip">
                        macOS
                      </a>
                    </li>
                    <li>
                      <a href="https://s3.amazonaws.com/thoriumsim/thorium-server-win.exe-a17.zip">
                        Windows
                      </a> - Note: There is a known issue with the Windows build. You must create a folder called {`{1}`} in the <code>\AppData\Local</code> folder.
                    </li>
                    <li>
                      <a href="https://s3.amazonaws.com/thoriumsim/thorium-server-linux-a17.zip">
                        Linux
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://s3.amazonaws.com/thoriumsim/damageReports.zip">
                    Damage Reports
                  </a>
                </li>
              </ul>
            </div> : <div>
              <h1>
                Please enter your email address to access prerelease
                versions of Thorium.
              </h1>
              <input type="text" onChange={evt => this.setState({
                    email: evt.target.value
                  })} value={this.state.email} />
              <button onClick={this.access}>Access</button>
            </div>}
        </div>
        <Footer />
      </div>;
  }
}
