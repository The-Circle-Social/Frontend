//** Package Imports
import { Switch, Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
//**  Components
import Sidebar from "./components/Sidebar.component";
import FormSecondary from "./components/FormSecondary.component";
import CrushSelection from "./components/CrushSelection/CrushSelection.component";
import FormForgotVerification from "./components/FormForgotVerification.component";
import UpdateUserInfo from "./components/UpdateUserInfo/UpdateUserInfo.component";
import UserProfile from "./components/UserProfile.component";
//**Pages
import Overview from "./pages/Overview.pages";
import SignUp from "./pages/Signup/Signup.pages";
import SignIn from "./pages/Signin.pages";
import ForgetPasswordFormComp from "./pages/Forget.pages";

import Explore from "./pages/Explore.pages";
import Map from "./pages/Map/Map.pages";
import PrivateChat from "./pages/PrivateChat.pages.jsx";
import ChatDir from "./pages/ChatDir.pages";
import ChangePassword from "./pages/ChangePassword.pages";
//**Showingposts
import ShowingPosts from "./components/ShowingPosts/ShowingPosts";

//**Styles
import "./App.scss"; //import data1 from "./Decrypt.js";
//**Hooks
//import useLocalStorage from './hooks/useLocalStorage'
//** Contexts
import { UserContext } from "./Contexts/UserContext.context";
function App() {
  const history = useHistory();
  const [user, setUser] = useState({});
  useEffect(() => {
    //client.service("message").create({})
    /* if 
      (!user.username &&
      history.location.pathname !== "/SignIn" &&
      history.location.pathname !== "/Forgot"
    ) {
      history.push("/Signup");
      console.log(history);
    } */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        {user && user.username && <Sidebar history={history} />}
        <Switch>
          <Route path="/explore" component={Explore} />
          <Route exact path="/Signup" component={SignUp} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/user/@:username" component={UserProfile} />
          <Route
            path="/Forgot"
            render={() => (
              <ForgetPasswordFormComp history={history} setUser={setUser} />
            )}
          />
          <Route
            path="/dm/:user/:friend"
            render={() => <PrivateChat user={user} type={"private"} />}
          />
          <Route
            path="/getInfo"
            render={() => <FormSecondary user={user} history={history} />}
          />
          <Route
            path="/getInfo"
            render={() => <FormSecondary user={user} history={history} />}
          />
          <Route path="/verify" component={FormForgotVerification} />
          <Route path="/map" exact component={Map} />
          <Route path="/chatdir" exact component={ChatDir} />
          <Route path="/overview" exact component={Overview} />
          <Route path="/changePass" exact component={ChangePassword} />
          <Route path="/ShowingPosts" exact component={ShowingPosts} />
          <Route
            path="/updateUserInfo"
            exact
            render={() => <UpdateUserInfo user={user} setUser={setUser} />}
          />
          <Route path="/" exact render={() => <CrushSelection user={user} />} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
