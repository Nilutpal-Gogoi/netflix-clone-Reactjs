/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";


export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [ loading, setLoading ] = useState(true)
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(()=>{
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return (
    profile.displayName ? ( 
      <React.Fragment>
        {loading ? (        
          <Loading src={user.photoURL} ></Loading> 
        ) : (
          <Loading.ReleaseBody></Loading.ReleaseBody>
        )}
        <Header src="joker1">
          <p>Hello</p>
          </Header>
      </React.Fragment>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile}></SelectProfileContainer>
    )
  );
}