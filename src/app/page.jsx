import Image from 'next/image'

export default function Home() {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Dashboard</a></li>
        <li>
          <a>Input</a>
          <ul className="p-2">
            <li><a>DATA MAHASISWA</a></li>
            <li><a>Histori Pendidikan</a></li>
          </ul>
        </li>
        <li><a>Log</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">NEO-UNA</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Dashboard</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Input</summary>
          <ul className="p-2">
            <li><a>Data Mahasiswa</a></li>
            <li><a>Histori Pendidikan</a></li>
          </ul>
        </details>
      </li>
      <li><a>Log</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Logout</a>
  </div>

</div>
  )
}
