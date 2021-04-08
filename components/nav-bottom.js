import Link from 'next/link'

const menus = [
  {id: 1, title: 'Beranda', icon: 'bi-house', link: '/'},
  {id: 2, title: 'Konsultasi', icon: 'bi-gear', link: '/konsultasi'},
  {id: 3, title: 'Berita', icon: 'bi-newspaper', link: '/berita'},
  {id: 4, title: 'Favorit', icon: 'bi-heart', link: '/favorit'},
  {id: 5, title: 'Profil', icon: 'bi-person', link: '/akun'},
];

export default function NavBottom(props) {
  const { isActive } = props

  return (
    <nav className="p-0 mobile navbar navbar-dark bg-primary navbar-expand fixed-bottom">
      <ul className="navbar-nav nav-justified w-100">
        {
          menus.map((item, i) => (
            <li className="nav-item" key={`nav-${i}`}>
              <Link href={item.link}>
                <a className={`nav-link text-center ${item.link === isActive ? 'active' : ''}`}>
                  <i className={`bi ${item.icon}`} style={{fontSize: '1.2em'}}></i>
                  <span className="small d-block">{item.title}</span>
                </a>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
