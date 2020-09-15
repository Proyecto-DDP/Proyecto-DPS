import React from 'react';
import ReactDOM from 'react-dom';

function LoginForm() {
    return (
        <div className="row mt-3">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">Inicio de sesión</div>

                    <div className="card-body">
                        <form method="POST" action="">
                            <div className="form-group row">
                                <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Nombre de usuario</label>

                                <div className="col-md-6">
                                    <input id="text" type="text" className="form-control" name="username" defaultValue="" required autoComplete="nombreUsuario" autoFocus />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Contraseña</label>

                                <div className="col-md-6">
                                    <input id="password" type="password" className="form-control" name="password" required autoComplete="current-password" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-3 offset-md-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="remember" id="remember" />

                                        <label className="form-check-label" htmlFor="remember">
                                            Recordarme
                                    </label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-check">
                                        <a href="#">Registrarme</a>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row mb-0">
                                <div className="col-md-8 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Ingresar
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;

if (document.getElementById('login')) {
    ReactDOM.render(<LoginForm />, document.getElementById('login'));
}
