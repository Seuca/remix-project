export default function Header(){
    return (

        <div className="jumbotron text-center">
          <div className="container">
            <h1 className="text text-success display-3">Sistema Contable</h1>
            
              <ul className="nav justify-content-center">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            
          </div>
        </div>
    );

}