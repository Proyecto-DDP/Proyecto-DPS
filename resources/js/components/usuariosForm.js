import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = 'http://localhost/control-mascotas-react/public/';

export default class UsuariosForm extends Component {

    //constructor que inicializa las variables de la clase
    constructor(props) {
        super(props);
        this.state = {
            usuario: [],
            codigoUsuario: 0,
            nombresUsuario: '',
            apellidosUsuario: '',
            password: '',
            edad: '',
            dui: '',
            cargo: '',
            telefono: '',
            edit: false
        }
        //handlers para capturar el valor de los campos cuando cambian
        this.handleChangeCodigo = this.handleChangeCodigo.bind(this); 
        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangeApellido = this.handleChangeApellido.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeEdad = this.handleChangeEdad.bind(this);
        this.handleChangeDUI = this.handleChangeDUI.bind(this);
        this.handleChangeCargo = this.handleChangeCargo.bind(this);
        this.handleChangeTelefono = this.handleChangeTelefono.bind(this);
    }
    //cuando el componente se genera, hace la conexión al backend
    componentDidMount() {
        axios.get(baseUrl + 'api/usuario/list').then(response => {
            this.setState({ usuario: response.data })
        }).catch(error => {
            alert("Error " + error)
        })
    }
    //render del jsx a html
    render() {
        return (
            <div className="container">
                <h3>Laravel y React APIRest</h3>
                <hr />
                <button type="button" className="btn btn-primary col-md-4" data-toggle="modal" data-target="#exampleModal">
                    Crear producto
              </button>
                <table className="table table-bordered order-table ">
                    <thead>
                        <tr>
                            <th>Código de usuario</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Contraseña</th>
                            <th>Edad</th>
                            <th>DUI</th>
                            <th>Cargo</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="bodytable">
                        {this.renderList()}
                    </tbody>
                </table>
                {/* formulario principal */}
                <form>
                    <div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de producto</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    
                                    <div className="form-group">
                                        <label htmlFor="codigoUsuario">Código de usuario</label>
                                        <input type="text" name="codigoUsuario" className="form-control" defaultValue={this.state.codigoUsuario} onChange={this.handleChangeCodigo} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="nombresUsuario">Nombre</label>
                                        <input type="text" name="nombresUsuario" className="form-control" defaultValue={this.state.nombresUsuario} onChange={this.handleChangeNombre} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="apellidosUsuario">Apellido</label>
                                        <input type="text" name="apellidosUsuario" className="form-control" defaultValue={this.state.apellidosUsuario} onChange={this.handleChangeApellido} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Contraseña</label>
                                        <input type="text" name="password" className="form-control" defaultValue={this.state.password} onChange={this.handleChangePass} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="edad">Edad</label>
                                        <input type="text" name="edad" className="form-control" defaultValue={this.state.edad} onChange={this.handleChangeEdad} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="dui">DUI</label>
                                        <input type="text" name="dui" className="form-control" defaultValue={this.state.dui} onChange={this.handleChangeDUI} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="cargo">Cargo</label>
                                        <input type="text" name="cargo" className="form-control" defaultValue={this.state.cargo} onChange={this.handleChangeCargo} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="telefono">Teléfono</label>
                                        <input type="text" name="telefono" className="form-control" defaultValue={this.state.telefono} onChange={this.handleChangeTelefono} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkUsuario()}>Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {/* modal de confirmación para eliminar */}
                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">

                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Eliminar</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Esta seguro desea de eliminar un regsitro?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkDelete()}>Eliminar</button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* formulario de editar */}
                <form>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de usuarios</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                <div className="form-group">
                                        <label htmlFor="codigoUsuario">Código de usuario</label>
                                        <input type="text" name="codigoUsuario" className="form-control" defaultValue={this.state.codigoUsuario} onChange={this.handleChangeCodigo} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="nombresUsuario">Nombre</label>
                                        <input type="text" name="nombresUsuario" className="form-control" defaultValue={this.state.nombresUsuario} onChange={this.handleChangeNombre} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="apellidosUsuario">Apellido</label>
                                        <input type="text" name="apellidosUsuario" className="form-control" defaultValue={this.state.apellidosUsuario} onChange={this.handleChangeApellido} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Contraseña</label>
                                        <input type="text" name="password" className="form-control" defaultValue={this.state.password} onChange={this.handleChangePass} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="edad">Edad</label>
                                        <input type="text" name="edad" className="form-control" defaultValue={this.state.edad} onChange={this.handleChangeEdad} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="dui">DUI</label>
                                        <input type="text" name="dui" className="form-control" defaultValue={this.state.dui} onChange={this.handleChangeDUI} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="cargo">Cargo</label>
                                        <input type="text" name="cargo" className="form-control" defaultValue={this.state.cargo} onChange={this.handleChangeCargo} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="telefono">Teléfono</label>
                                        <input type="text" name="telefono" className="form-control" defaultValue={this.state.telefono} onChange={this.handleChangeTelefono} />
                                    </div>

                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    {/* si el registro ya existe, modifica, sino, guarda */}
                                    {
                                        this.state.edit ?
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkUpdate()}>Actualizar</button>
                                            :
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkUsuario()}>Guardar</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    //función que renderiza los elementos que regresen del backend
    renderList() {
        return this.state.usuario.map((data) => {
            return (
                <tr>
                    <td>{data.codigoUsuario}</td>
                    <td>{data.nombresUsuario}</td>
                    <td>{data.apellidosUsuario}</td>
                    <td>{data.password}</td>
                    <td>{data.edad}</td>
                    <td>{data.dui}</td>
                    <td>{data.cargo}</td>
                    <td>{data.telefono}</td>
                    <td>
                        <button className="btn btn-info" onClick={() => this.showModalEdit(data)}>Editar</button>
                        <br />
                        <button className="btn btn-danger" onClick={() => this.showModalDelete(data)}>Eliminar</button>
                    </td>
                </tr>
            )
        })
    }

    //declaración de los handlers que se usan en el constructor
    handleChangeCodigo(event) {
        this.setState({ codigoUsuario: event.target.value });
    }

    handleChangeNombre(event) {
        this.setState({ nombresUsuario: event.target.value });
    }

    handleChangeApellido(event) {
        this.setState({ apellidosUsuario: event.target.value });
    }

    handleChangePass(event) {
        this.setState({ password: event.target.value });
    }

    handleChangeEdad(event) {
        this.setState({ edad: event.target.value });
    }

    handleChangeDUI(event) {
        this.setState({ dui: event.target.value });
    }

    handleChangeCargo(event) {
        this.setState({ cargo: event.target.value });
    }

    handleChangeTelefono(event) {
        this.setState({ telefono: event.target.value });
    }
    //función para ingresar una nueva mascota
    sendNetworkUsuario() {
        //mete los datos en un formData
        const formData = new FormData()
        formData.append('codigoUsuario', this.state.codigoUsuario)
        formData.append('nombresUsuario', this.state.nombresUsuario)
        formData.append('apellidosUsuario', this.state.apellidosUsuario)
        formData.append('password', this.state.password)
        formData.append('edad', this.state.edad)
        formData.append('dui', this.state.dui)
        formData.append('cargo', this.state.cargo)
        formData.append('telefono', this.state.telefono)
        formData.append('remember_token', null)

        //pasa los datos a la ruta definida en routes>api.php
        axios.post(baseUrl + 'api/usuario/nuevo', formData).then(response => {
            //si la respuesta es success
            if (response.data.success == true) {
                alert(response.data.message)
                // cargar datos de nuevo
                this.loadData()
                $("#exampleModal").modal("hide");
            }

        }).catch(error => {
            alert("Error " + error)
        })

    }
    //funcuión para editar un registro
    sendNetworkUpdate() {

        const formData = new FormData()
        formData.append('codigoUsuario', this.state.codigoUsuario)
        formData.append('nombresUsuario', this.state.nombresUsuario)
        formData.append('apellidosUsuario', this.state.apellidosUsuario)
        formData.append('password', this.state.password)
        formData.append('edad', this.state.edad)
        formData.append('dui', this.state.dui)
        formData.append('cargo', this.state.cargo)
        formData.append('telefono', this.state.telefono)
        formData.append('remember_token', null)

        axios.post(baseUrl + 'api/usuario/editar', formData).then(response => {

            if (response.data.success == true) {
                alert(response.data.message)
                // para cargar datos de nuevo
                this.loadData()
                // para cerrar el modal
                $("#exampleModal").modal("hide");
            }

        }).catch(error => {
            alert("Error 456" + error)
        })

    }
    //función para eliminar un registro
    sendNetworkDelete() {

        const formData = new FormData()
        formData.append('codigoUsuario', this.state.codigoUsuario)

        axios.post(baseUrl + 'api/usuario/eliminar', formData).then(response => {

            if (response.data.success == true) {
                alert(response.data.message)
                // para cargar datos de nuevo
                this.loadData()
                // para cerrar el modal
                $("#exampleModalDelete").modal("hide");
            }

        }).catch(error => {
            alert("Error " + error)
        })

    }
    //vuelve a cargar la tabla donde se muestran
    loadData() {

        axios.get(baseUrl + 'api/usuario/list').then(response => {
            this.setState({
                usuario: response.data
            })
        }).catch(error => {
            alert("Error " + error)
        })

    }

    showModalDelete(data) {
        // id seleccionado para eliminar
        this.setState({ codigoUsuario: data.codigoUsuario })
        $("#exampleModalDelete").modal("show");
    }

    showModalEdit(data) {
        //alert("mostrar modal "+JSON.stringify(data))
        this.setState({
            codigoUsuario: data.codigoUsuario,
            nombresUsuario: data.nombresUsuario,
            apellidosUsuario: data.apellidosUsuario,
            password: data.password,
            edad: data.edad,
            dui: data.dui,
            cargo: data.cargo,
            telefono: data.telefono,
            edit: true
        })
        $("#exampleModal").modal("show");
    }
};

if (document.getElementById('crud-usuarios')) {
    ReactDOM.render(<UsuariosForm/>, document.getElementById('crud-usuarios'));
}