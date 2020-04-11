import React from "react";
import Directory from "../../components/directory/directory.component";
import {HomepageContainer} from "./homepage.styles";

const HomePage = props => {
  return (
    <HomepageContainer >
     <Directory/>
    </HomepageContainer>
  );
};

export default HomePage;

