// import React from 'react';
// import './style.css';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { render } from "react-dom";

// Create generic HOC that will intercept Promise props and pass it's result to child component.
// E.g. we want to be able to wrap SocialActivityComponent and then use it like that:
// <SocialActivity retweetsCount={retweetsCountPromise} fbRepostsCount={fbRepostsCountPromise} linkedinRepostsCount={linkedinRepostsCountPromise}/>
// P.S. If you don't like the idea of implementing this as a HOC lets discuss implemetation based on a custom React Hook
const SocialActivityComponent = (props) => {
  console.log("in scoal ian", props);
  return (
    <div>
      <div>Retweets: {props.retweetsCount}</div>
      <div>Reposts in Facebook: {props.fbRepostsCount}</div>
      <div>Reposts in Linkedin: {props.linkedinRepostsCount}</div>
    </div>
  );
};

// Neeeds to be implemented
const Await = (props) => {
  //you have to exectue all promises in childComponentProps
  // return null;
  // return props.childComponent({retweetsCount:3, fbRepostsCount:2})
  const [compStatus, setCompSatus] = useState(false);
  const [result, setresult] = useState({});
  // useEffect(() => {
  //   return props.childComponent(result);
  // }, [result]);
  let keys = Object.keys(props.childComponentProps);
  let vals = Object.values(props.childComponentProps);
  Promise.all(vals).then((result) => {
    console.log(result);
    let comProps = {};
    for (let i = 0; i < result.length; i++) {
      comProps[keys[i]] = result[i];
    }
    // setCompSatus(true);
    setresult(comProps);
    // return props.childComponent(result);
  });

  return props.childComponent(result);
};

const awaitHOC = (childComponent) => {
  return (props) => {
    return (
      <Await childComponentProps={props} childComponent={childComponent} />
    );
  };
};

const SocialActivity = awaitHOC(SocialActivityComponent);

// render(
//   // <SocialActivity
//   //   retweetsCount={Promise.resolve(1)}
//   //   fbRepostsCount={Promise.resolve(2)}
//   //   linkedinRepostsCount={Promise.resolve(3)}
//   // />,
//       <SocialActivityComponent
//       retweetsCount={1}
//       fbRepostsCount={2}
//       linkedinRepostsCount={3}
//     />,
//   document.getElementById("root")
// );

export default function App() {
  return (
    <div>
      {/* <SocialActivity
        retweetsCount={Promise.resolve(1)}
        fbRepostsCount={Promise.resolve(2)}
        linkedinRepostsCount={Promise.resolve(3)}
      /> */}
      <SocialActivityComponent
        retweetsCount={1}
        fbRepostsCount={2}
        linkedinRepostsCount={3}
      />
    </div>
  );
}
