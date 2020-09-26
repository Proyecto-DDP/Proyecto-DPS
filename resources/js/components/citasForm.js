import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = 'http://localhost/control-mascotas-react/public/';

export default class CitasForm extends Component {

    //constructor que inicializa las variables de la clase
    constructor(props) {
        super(props);
        this.state = {
            cita: [],
            idCita: '',
            codigoUsuario: '',
            fecha: '',
            idRecibo: '',
            edit: false
        }
        //handlers para capturar el valor de los campos cuando cambian
        this.handleChangeIdCita = this.handleChangeIdCita.bind(this); 
        this.handleChangeCodigoUsuario = this.handleChangeCodigoUsuario.bind(this);
        this.handleChangeFecha = this.handleChangeFecha.bind(this)
        this.handleChangeRecibo = this.handleChangeRecibo.bind(this)
    }
    //cuando el componente se genera, hace la conexión al backend
    componentDidMount() {
        axios.get(baseUrl + 'api/cita/list').then(response => {
            this.setState({ cita: response.data })
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
                            <th>Código de cita</th>
                            <th>Código de usuario</th>
                            <th>Fecha de cita</th>
                            <th>ID de Recibo</th>
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de citas</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="idCita">Código de cita</label>
                                        <input name="idCita" className="form-control" defaultValue={this.state.idCita} onChange={this.handleChangeIdCita} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="codigoUsuario">Código de usuario</label>
                                        <input name="codigoUsuario" className="form-control" defaultValue={this.state.codigoUsuario} onChange={this.handleChangeCodigoUsuario} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fechaCita">Fecha de cita</label>
                                        <input name="fechaCita" className="form-control" defaultValue={this.state.fecha} onChange={this.handleChangeFecha}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="idRecibo">ID de Recibo</label>
                                        <input name="idRecibo" type="text" className="form-control" defaultValue={this.state.idRecibo} onChange={this.handleChangeRecibo} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkCita()}>Guardar</button>
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de citas</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* Esta mierda al darle editar hay que ponerla como read only para que no edite el id */}
                                    <div className="form-group">
                                        <label htmlFor="idCita">Código de cita</label>
                                        <input name="idCita" className="form-control" defaultValue={this.state.idCita} onChange={this.handleChangeIdCita} />
                                    </div>
                                    {/* matame */}
                                    <div className="form-group">
                                        <label htmlFor="codigoUsuario">Código de usuario</label>
                                        <input name="codigoUsuario" className="form-control" defaultValue={this.state.codigoUsuario} onChange={this.handleChangeCodigoUsuario} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fechaCita">Fecha de cita</label>
                                        <input name="fechaCita" className="form-control" defaultValue={this.state.fecha} onChange={this.handleChangeFecha}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="idRecibo">ID de Recibo</label>
                                        <input type="number" name="idRecibo" type="text" className="form-control" defaultValue={this.state.idRecibo} onChange={this.handleChangeRecibo} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    {/* si el registro ya existe, modifica, sino, guarda */}
                                    {
                                        this.state.edit ?
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkUpdate()}>Actualizar</button>
                                            :
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkCita()}>Guardar</button>
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
        return this.state.cita.map((data) => {
            return (
                <tr>
                    <td>{data.idCita}</td>
                    <td>{data.codigoUsuario}</td>
                    <td>{data.fecha}</td>
                    <td>{data.idRecibo}</td>
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
    handleChangeIdCita(event) {
        this.setState({ idCita: event.target.value });
    }

    handleChangeCodigoUsuario(event) {
        this.setState({ codigoUsuario: event.target.value });
    }

    handleChangeFecha(event) {
        this.setState({ fecha: event.target.value });
    }

    handleChangeRecibo(event) {
        this.setState({ idRecibo: event.target.value });
    }

    //función para ingresar una nueva Cita
    sendNetworkCita() {
        //mete los datos en un formData
        const formData = new FormData()
        formData.append('idCita', this.state.idCita)
        formData.append('codigoUsuario', this.state.codigoUsuario)
        formData.append('fecha', this.state.fecha)
        formData.append('idRecibo', this.state.idRecibo)

        //pasa los datos a la ruta definida en routes>api.php
        axios.post(baseUrl + 'api/cita/nuevo', formData).then(response => {
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
        formData.append('idCita', this.state.idCita)
        formData.append('codigoUsuario', this.state.codigoUsuario)
        formData.append('fecha', this.state.fecha)
        formData.append('idRecibo', this.state.idRecibo)

        axios.post(baseUrl + 'api/cita/editar', formData).then(response => {

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
        formData.append('idCita', this.state.idCita)

        axios.post(baseUrl + 'api/cita/eliminar', formData).then(response => {

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

        axios.get(baseUrl + 'api/cita/list').then(response => {
            this.setState({
                cita: response.data
            })
        }).catch(error => {
            alert("Error " + error)
        })

    }

    showModalDelete(data) {
        // id seleccionado para eliminar
        this.setState({ idCita: data.idCita })
        $("#exampleModalDelete").modal("show");
    }

    showModalEdit(data) {
        //alert("mostrar modal "+JSON.stringify(data))
        this.setState({
            idCita: data.idCita,
            codigoUsuario: data.codigoUsuario,
            fecha: data.fecha,
            idRecibo: data.idRecibo,
            edit: true
        })
        $("#exampleModal").modal("show");
    }
};

if (document.getElementById('crud-citas')) {
    ReactDOM.render(<CitasForm/>, document.getElementById('crud-citas'));
}