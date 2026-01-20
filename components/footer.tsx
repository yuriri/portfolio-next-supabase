import { ThemeSwitcher } from "./theme-switcher"
const Footer = () => {
  return <footer className="flex justify-center gap-4 md:gap-10 pb-4 pt-12 items-center">
    <small>Sakai Portfolio</small><ThemeSwitcher />
  </footer>
}


export default Footer;