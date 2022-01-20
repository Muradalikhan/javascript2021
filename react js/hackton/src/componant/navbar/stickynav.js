/**
 * Header
 * @param {object} children is your menu link items
 */
 import useScrollingUp from '@/hooks/useScrollingUp'

 const Header = ({ children }) => {
   const scrolled = useScrollingUp()
   return <header className={`${scrolled ? 'stickyHeader' : ''}`}>{children}</header>
 }
 export default Header