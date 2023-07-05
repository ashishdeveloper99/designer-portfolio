import Link from 'next/link'
import { useRouter } from 'next/router'

export const routes = [
  {
    path: '/',
    label: 'ホメパゲ',
  },
  {
    path: '/works',
    label: '作品',
  },
  {
    path: '/posts',
    label: 'ブログ',
  },
 
  {
    path: '/about',
    label: '私について',
  },

  {
    path: 'https://ashishd.online',
    label: 'English',
  },
]

const MenuItems = () => {
  const removeFocus = e => {
    e.currentTarget.blur()
  }
  const currentRoute = useRouter().pathname
  return (
    <>
      <div className="relative items-center justify-start flex-grow hidden space-x-6 md:flex">
        {routes.map(route => (
          <Link key={route.path} href={route.path}>
            <a
              className={
                route.path === currentRoute
                  ? 'text-fore-primary transition-colors font-bold tracking-wide'
                  : 'text-fore-subtle transition-colors tracking-wide nav--item'
              }
              onClick={removeFocus}
            >
              {route.label}
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}
export default MenuItems
