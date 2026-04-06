// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component.
import { library } from "@fortawesome/fontawesome-svg-core";
// Add new icons here as needed — only import what's used to keep the bundle small.
import {
  faUser,
  faInfoCircle,
  faUsers,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Timeline from "./TimelineComponent";
import Event from "./EventComponent";

library.add(faUser, faInfoCircle, faUsers, faCalendarAlt);

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Icon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <Icon />.
  Timeline,
  Event,
};
