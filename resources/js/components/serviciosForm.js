import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = 'http://localhost/control-mascotas-react/public/';

export default class ServiciosForm extends Component {

    //constructor que inicializa las variables de la clase
    constructor(props) {
        super(props);
        this.state = {
            servicio: [],
            idServicio: '',
            tiempoEstimado: 0,
            nombreServicio: '',
            formatoTiempo: '',
            precio: 0,
            edit: false
        }
        //handlers para capturar el valor de los campos cuando cambian
        this.handleChangeIdServicio = this.handleChangeIdServicio.bind(this);
        this.handleChangeNombreServicio = this.handleChangeNombreServicio.bind(this);
        this.handleChangeTiempoEstimado = this.handleChangeTiempoEstimado.bind(this)
        this.handleChangeFormatoTiempo = this.handleChangeFormatoTiempo.bind(this)
        this.handleChangePrecio = this.handleChangePrecio.bind(this)
    }
    //cuando el componente se genera, hace la conexión al backend
    componentDidMount() {
        axios.get(baseUrl + 'api/servicio/list').then(response => {
            this.setState({ servicio: response.data })
        }).catch(error => {
            alert("Error " + error)
        })
    }
    //render del jsx a html
    render() {
        return (
            <div className="container">
                <h3>Servicios</h3>
                <hr />
                <button type="button" className="btn btn-primary col-md-4" data-toggle="modal" data-target="#exampleModal">
                    Crear el servicio
              </button>
                <table className="table table-bordered order-table ">
                    <thead>
                        <tr>
                            <th>ID Servicio</th>
                            <th>Nombre del servicio</th>
                            <th>Tiempo estimado</th>
                            <th>Formato de tiempo</th>
                            <th>Precio</th>
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de servicios</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="idServicio">id del Servicio</label>
                                        <input type="text" name="idServicio" className="form-control" defaultValue={this.state.idServicio} onChange={this.handleChangeIdServicio} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombreServicio">Servicio</label>
                                        <select name="nombreServicio" defaultValue={this.state.nombreServicio} onChange={this.handleChangeNombreServicio}>
                                            <option value="">-- Seleccione un servicio --</option>
                                            <option value="1">Hospital</option>
                                            <option value="2">Consultas</option>
                                            <option value="3">Hospedaje</option>
                                            <option value="4">Baños Medicados</option>
                                            <option value="5">Peluquería</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tiempoEstimado">Tiempo Estimado</label>
                                        <input type="text" name="tiempoEstimado" className="form-control" defaultValue={this.state.tiempoEstimado} onChange={this.handleChangeTiempoEstimado} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formatoTiempo">Formato de tiempo</label>
                                        <select name="formatoTiempo" defaultValue={this.state.formatoTiempo} onChange={this.handleChangeFormatoTiempo}>
                                            <option value="">-- Seleccione un servicio --</option>
                                            <option value="1">Minutos</option>
                                            <option value="2">Horas</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="precio">Precio</label>
                                        <input type="text" name="precio" className="form-control" defaultValue={this.state.precio} onChange={this.handleChangePrecio} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkServ()}>Guardar</button>
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
                                <p>¿Esta seguro desea de eliminar el registro?</p>
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de servicios</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="idServicio">id del Servicio</label>
                                        <input type="text" name="idServicio" className="form-control" defaultValue={this.state.idServicio} onChange={this.handleChangeIdServicio} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombreServicio">Servicio</label>
                                        <select name="nombreServicio" defaultValue={this.state.nombreServicio} onChange={this.handleChangeNombreServicio}>
                                            <option value="">-- Seleccione un servicio --</option>
                                            <option value="1">Hospital</option>
                                            <option value="2">Consultas</option>
                                            <option value="3">Hospedaje</option>
                                            <option value="4">Baños Medicados</option>
                                            <option value="5">Peluquería</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tiempoEstimado">Tiempo Estimado</label>
                                        <input type="text" name="tiempoEstimado" className="form-control" defaultValue={this.state.tiempoEstimado} onChange={this.handleChangeTiempoEstimado} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formatoTiempo">Formato de tiempo</label>
                                        <select name="formatoTiempo" defaultValue={this.state.formatoTiempo} onChange={this.handleChangeFormatoTiempo}>
                                            <option value="">-- Seleccione un servicio --</option>
                                            <option value="1">Minutos</option>
                                            <option value="2">Horas</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="precio">Precio</label>
                                        <input type="text" name="precio" className="form-control" defaultValue={this.state.precio} onChange={this.handleChangePrecio} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    {/* si el registro ya existe, modifica, sino, guarda */}
                                    {
                                        this.state.edit ?
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkUpdate()}>Actualizar</button>
                                            :
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkServ()}>Guardar</button>
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
        return this.state.servicio.map((data) => {
            return (
                <tr>
                    <td>{data.idServicio}</td>
                    <td>{data.nombreServicio}</td>
                    <td>{data.tiempoEstimado}</td>
                    <td>{data.formatoTiempo}</td>
                    <td>{data.precio}</td>
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
    handleChangeIdServicio(event) {
        this.setState({ idServicio: event.target.value });
    }

    handleChangeNombreServicio(event) {
        this.setState({ nombreServicio: event.target.value });
    }

    handleChangeTiempoEstimado(event) {
        this.setState({ tiempoEstimado: event.target.value });
    }

    handleChangeFormatoTiempo(event) {
        this.setState({ formatoTiempo: event.target.value });
    }

    handleChangePrecio(event) {
        this.setState({ precio: event.target.value });
    }

    //función para ingresar una nueva mascota
    sendNetworkServ() {
        //mete los datos en un formData
        const formData = new FormData()
        formData.append('idServicio', this.state.idServicio)
        formData.append('nombreServicio', this.state.nombreServicio)
        formData.append('tiempoEstimado', this.state.tiempoEstimado)
        formData.append('formatoTiempo', this.state.formatoTiempo)
        formData.append('precio', this.state.precio)
        //pasa los datos a la ruta definida en routes>api.php
        axios.post(baseUrl + 'api/servicio/nuevo', formData).then(response => {
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
        formData.append('idServicio', this.state.idServicio)
        formData.append('nombreServicio', this.state.nombreServicio)
        formData.append('tiempoEstimado', this.state.tiempoEstimado)
        formData.append('formatoTiempo', this.state.formatoTiempo)
        formData.append('precio', this.state.precio)

        axios.post(baseUrl + 'api/servicio/editar', formData).then(response => {

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
        formData.append('idServicio', this.state.idServicio)

        axios.post(baseUrl + 'api/servicio/eliminar', formData).then(response => {

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

        axios.get(baseUrl + 'api/servicio/list').then(response => {
            this.setState({
                servicio: response.data
            })
        }).catch(error => {
            alert("Error " + error)
        })

    }

    showModalDelete(data) {
        // id seleccionado para eliminar
        this.setState({ idServicio: data.idServicio })
        $("#exampleModalDelete").modal("show");
    }

    showModalEdit(data) {
        //alert("mostrar modal "+JSON.stringify(data))
        this.setState({
            idServicio: data.idServicio,
            nombreServicio: data.nombreServicio,
            tiempoEstimado: data.tiempoEstimado,
            formatoTiempo: data.formatoTiempo,
            precio: data.precio,
            edit: true
        })
        $("#exampleModal").modal("show");
    }
};

if (document.getElementById('crud-servicios')) {
    ReactDOM.render(<ServiciosForm/>, document.getElementById('crud-servicios'));
}