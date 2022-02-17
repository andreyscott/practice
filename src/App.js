import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faInstagram } from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";


export default function App() {
  

  return <div className="icons">
 <a href="https://twitter/andreyscott5"
 className="facebook social">
<FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
{/* <a href="https://www.instagram.com/andrayscott/"
className="instagram social">
 <FontAwesomeIcon icon={faInstagram} size="2x" />
</a> */}

</div>;
}
