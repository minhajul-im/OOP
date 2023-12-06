import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GoogleAndGithub() {
  return (
    <div className="text-white text-center pt-2">
      <FontAwesomeIcon
        icon={faGoogle}
        className="text-2xl mx-2 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faGithub}
        className="text-2xl mx-2 cursor-pointer"
      />
      <p>You can sign in Google & Github!</p>
    </div>
  );
}
