import About from 'pages/About';
import Team from 'pages/Team';
import Contact from 'pages/Contact';
import CropCal from 'pages/CropCal';
import Home from 'pages/Home';
const routes = [
  ['/', 'Home', Home],
  ['/about', 'About', About],
  ['/team', 'Team', Team],
  ['/crop_calendar', 'Crop Calendar', CropCal],
  ['/contact_us', 'Contact Us', Contact],
];

export default routes;
