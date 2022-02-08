import React from "react";
import NavigationLink from "./NavigationLink";
import NavigationUl from "./NavigationUl";
import NavigationWrapper from "./NavigationWrapper";

function TopNavigation() {
  return (
    <NavigationWrapper>
      <NavigationUl>
        <NavigationLink path={"/"} page='Home' />
        <NavigationLink path={"/about"} page='About' last />
      </NavigationUl>
    </NavigationWrapper>
  );
}

export default TopNavigation;
