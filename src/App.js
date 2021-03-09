import { Switch, Route, useHistory } from "react-router-dom";
import io from "socket.io-client";
import { useEffect, useRef, useState } from "react";
// Components
import Newblog from "./components/blog/newblog";
import PostBlog from "./components/blog/PostAndBlog"
import NewPost from "./components/blog/newpost"
import Sidebar from "./components/Sidebar.component";
import FormSecondary from "./components/FormSecondary.component";
import CrushSelection from "./components/CrushSelection/CrushSelection.component";
import FormForgotVerification from "./components/FormForgotVerification.component";
import UpdateUserInfo from "./components/UpdateUserInfo/UpdateUserInfo.component";
import UserProfile from "./components/UserProfile.component";
//Pages
import Overview from "./pages/Overview.pages";
import Friend from "./pages/friendpage";
import SignupFormComp from "./pages/Signup/Signup.pages";
import SigninFormComp from "./pages/Signin.pages";
import ForgetPasswordFormComp from "./pages/Forget.pages";
import Explore from "./pages/Explore.pages";
import Map from "./pages/Map/Map.pages";
import PrivateChat from "./pages/PrivateChat.pages.jsx";
import ChatDir from "./pages/ChatDir.pages";
import ChangePassword from "./pages/ChangePassword.pages";
import GroupSetting from "./pages/GroupSetting.pages";
//- jkala
//Styles
import "./App.scss"; //import data1 from "./Decrypt.js";
import Page404 from "./pages/404Page.pages";
//Hooks
//import useLocalStorage from './hooks/useLocalStorage';
//showingpost
import ShowingPosts from "./components/tr/ShowingPosts" 
function App() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "user4",
  });
  const [currentGroup, setCurrentGroup] = useState({});
  useEffect(() => {
    console.log(currentGroup);
  }, [currentGroup]);
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
    <div>
      {user ? (
        user.username ? (
          <Sidebar setUser={setUser} history={history} />
        ) : null
      ) : null}
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route
          exact
          path="/Signup"
          render={() => <SignupFormComp setUser={setUser} history={history} />}
        />
        <Route
          path="/SignIn"
          render={() => <SigninFormComp history={history} setUser={setUser} />}
        />
         <Route
          path="/post" component={NewPost}
         
        />
        <Route path="/user/@:username" component={UserProfile} />
        <Route
          path="/Forgot"
          render={() => (
            <ForgetPasswordFormComp history={history} setUser={setUser} />
          )}
        />
        <Route
          path="/:type/@:groupid/@:group_name/@:user"
          exact
          render={() => (
            <PrivateChat type="group" user={user.name} group={currentGroup} />
          )}
        />
        <Route
          path="/:type/@:friend/@:user"
          exact
          render={() => <PrivateChat user={user.name} type="private" />}
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
        <Route path="/ShowingPosts" exact component={ShowingPosts}/>
        <Route
          path="/chatdir"
          exact
          render={() => (
            <ChatDir setGroup={setCurrentGroup} user={user} history={history} />
          )}
        />
        <Route path="/blog" exact component ={Newblog}/> 
        <Route path="/post" exact component ={NewPost}/> 
        <Route path="/postblog" exact component ={PostBlog}/> 
        <Route path="/overview" exact component={Overview} />
        <Route path="/friendpage" exact component={Friend} />
        <Route path="/changePass" exact component={ChangePassword} />
        <Route
          path="/:groupid/edit/:user"
          exact
          render={() => <GroupSetting history={history} />}
        />
        <Route
          path="/updateUserInfo"
          exact
          render={() => <UpdateUserInfo user={user} setUser={setUser} />}
        />
        <Route path="/" exact render={() => <CrushSelection user={user} />} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
