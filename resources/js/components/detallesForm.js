import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = 'http://localhost/control-mascotas-react/public/';

export default class DetallesForm extends Component {

    //constructor que inicializa las variables de la clase
    constructor(props) {
        super(props);
        this.state = {
            detalle: [],
            idRecibo: '',
            idServicio: 0,
            cantidad: 0,
            edit: false
        }
        //handlers para capturar el valor de los campos cuando cambian
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeServicio = this.handleChangeServicio.bind(this);
        this.handleChangeCantidad = this.handleChangeCantidad.bind(this)
    }
    //cuando el componente se genera, hace la conexión al backend
    componentDidMount() {
        axios.get(baseUrl + 'api/detalle/list').then(response => {
            this.setState({ detalle: response.data })
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
                    Crear detalle
              </button>
                <table className="table table-bordered order-table ">
                    <thead>
                        <tr>
                            <th>Código de detalle</th>
                            <th>Código Servicio</th>
                            <th>Cantidad</th>
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de detalle</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="idRecibo">Código de detalle</label>
                                        <input type="text" name="idRecibo" className="form-control" defaultValue={this.state.idRecibo} onChange={this.handleChangeId} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="idServicio">Servicio</label>
                                        <select name="idServicio" defaultValue={this.state.idServicio} onChange={this.handleChangeServicio}>
                                            <option value="">-- Seleccione un servicio --</option>
                                            <option value="1">Corte de pelo</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cantidad">Cantidad</label>
                                        <input name="cantidad" type="text" className="form-control" defaultValue={this.state.cantidad} onChange={this.handleChangeCantidad} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkDetalle()}>Guardar</button>
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de detalles</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="idRecibo">Código de detalle</label>
                                        <input type="text" name="idRecibo" className="form-control" defaultValue={this.state.idRecibo} onChange={this.handleChangeId} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="idServicio">Servicio</label>
                                        <select name="idServicio" value={this.state.value} onChange={this.handleChangeServicio}>
                                            <option value="">-- Seleccione un servicio --</option>
                                            <option value="1">Corte de pelo</option>
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="cantidad">Cantidad</label>
                                        <input name="cantidad" type="text" className="form-control" defaultValue={this.state.cantidad} onChange={this.handleChangeCantidad} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    {/* si el registro ya existe, modifica, sino, guarda */}
                                    {
                                        this.state.edit ?
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkUpdate()}>Actualizar</button>
                                            :
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkDetalle()}>Guardar</button>
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
        return this.state.detalle.map((data) => {
            return (
                <tr>
                    <td>{data.idRecibo}</td>
                    <td>{data.idServicio}</td>
                    <td>{data.cantidad}</td>
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
    handleChangeId(event) {
        this.setState({ idRecibo: event.target.value });
    }

    handleChangeServicio(event) {
        this.setState({ idServicio: event.target.value });
    }

    handleChangeCantidad(event) {
        this.setState({ cantidad: event.target.value });
    }

    //función para ingresar una nueva mascota
    sendNetworkDetalle() {
        //mete los datos en un formData
        const formData = new FormData()
        formData.append('idRecibo', this.state.idRecibo)
        formData.append('idServicio', this.state.idServicio)
        formData.append('cantidad', this.state.cantidad)
        //pasa los datos a la ruta definida en routes>api.php
        axios.post(baseUrl + 'api/detalle/nuevo', formData).then(response => {
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
        formData.append('idRecibo', this.state.idRecibo)
        formData.append('idServicio', this.state.idServicio)
        formData.append('cantidad', this.state.cantidad)

        axios.post(baseUrl + 'api/detalle/editar', formData).then(response => {

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
        formData.append('idRecibo', this.state.idRecibo)

        axios.post(baseUrl + 'api/detalle/eliminar', formData).then(response => {

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

        axios.get(baseUrl + 'api/detalle/list').then(response => {
            this.setState({
                detalle: response.data
            })
        }).catch(error => {
            alert("Error " + error)
        })

    }

    showModalDelete(data) {
        // id seleccionado para eliminar
        this.setState({ idRecibo: data.idRecibo })
        $("#exampleModalDelete").modal("show");
    }

    showModalEdit(data) {
        //alert("mostrar modal "+JSON.stringify(data))
        this.setState({
            idRecibo: data.idRecibo,
            idServicio: data.idServicio,
            cantidad: data.cantidad,
            edit: true
        })
        $("#exampleModal").modal("show");
    }
};

if (document.getElementById('crud-detalles')) {
    ReactDOM.render(<DetallesForm />, document.getElementById('crud-detalles'));
}
