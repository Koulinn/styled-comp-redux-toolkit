import React from "react";
import NavigationItems from "./NavigationItems";
import { Link } from "react-router-dom";

function NavigationLink({ path, page }) {
  return (
    <NavigationItems>
      <Link to={path}>{page}</Link>
    </NavigationItems>
  );
}

export default NavigationLink;
