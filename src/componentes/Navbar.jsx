import React from 'react';
import CartWidget from './CartWidget';


const Navbar = () => {
    return (
        <header>
            <section>
                <div className="titulo-igual">
                    <h1>Classy Cars</h1>
                    <nav className="navbar navbar-expand-md navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse  justify-content-center" id="navbarNav">
                            <ul className="inicio-uno navbar-nav ml-auto">
                                <li className="nav-item inicio">
                                    <a href="../index.html" title="INICIO" className=" nav-link ">Inicio</a>
                                </li>
                                <li className="nav-item inicio">
                                    <a href="venta.html" title="Autos en venta" className=" nav-link ">En venta</a>
                                </li>
                                <li className="nav-item inicio">
                                    <a href="alquiler.html" title="Autos en alquiler" className="nav-link ">En alquiler</a>
                                </li>
                                <li className="nav-item inicio">
                                    <a href="sobre-nosotros.html" title="Quienes somos" className="nav-link ">Sobre Nosotros</a>
                                </li>
                                <li className=" nav-item inicio">
                                    <a href="modelos-unicos.html" title="Modelos unicos" className="nav-link">Modelos Unicos</a>
                                </li>
                            </ul>
                            <div className="carrito">
                                <a href="#" title="Carrito de compras">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span id="carrito-count" className="carrito-count">5</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </header>
    );
};

export default Navbar;

