import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = 'http://localhost/control-mascotas-react/public/';

export default class RecibosForm extends Component {

    //constructor que inicializa las variables de la clase
    constructor(props) {
        super(props);
        this.state = {
            recibo: [],
            idRecibo: '',
            codigoUsuario: 0,
            idDetalle: 0,
            total: '',
            edit: false
        }
        //handlers para capturar el valor de los campos cuando cambian
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeUsuario = this.handleChangeUsuario.bind(this);
        this.handleChangeDetalle = this.handleChangeDetalle.bind(this)
        this.handleChangeTotal = this.handleChangeTotal.bind(this)
    }
    //cuando el componente se genera, hace la conexión al backend
    componentDidMount() {
        axios.get(baseUrl + 'api/recibo/list').then(response => {
            this.setState({ recibo: response.data })
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
                    Crear recibo
              </button>
                <table className="table table-bordered order-table ">
                    <thead>
                        <tr>
                            <th>Código de recibo</th>
                            <th>Código usuario</th>
                            <th>Código detalle</th>
                            <th>Total</th>
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de recibo</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="idRecibo">Código de recibo</label>
                                        <input type="text" name="idRecibo" className="form-control" defaultValue={this.state.idRecibo} onChange={this.handleChangeId} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="codigoUsuario">Usuario</label>
                                        <select name="codigoUsuario" defaultValue={this.state.codigoUsuario} onChange={this.handleChangeUsuario}>
                                            <option value="">-- Seleccione un Usuario --</option>
                                            <option value="1">Oscar Palacios</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="idDetalle">Detalle</label>
                                        <input name="idDetalle" type="text" className="form-control" defaultValue={this.state.idDetalle} onChange={this.handleChangeDetalle} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="total">Total</label>
                                        <input name="total" type="number" className="form-control" defaultValue={this.state.total} onChange={this.handleChangeTotal} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkRecibo()}>Guardar</button>
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de recibos</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="idRecibo">Código de recibo</label>
                                        <input type="text" name="idRecibo" className="form-control" defaultValue={this.state.idRecibo} onChange={this.handleChangeId} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="codigoUsuario">Usuario</label>
                                        <select name="codigoUsuario" value={this.state.value} onChange={this.codigoUsuario}>
                                            <option value="">-- Seleccione un usuario --</option>
                                            <option value="1">Oscar Palacios</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="idDetalle">Detalle</label>
                                        <input name="idDetalle" type="text" className="form-control" defaultValue={this.state.idDetalle} onChange={this.handleChangeDetalle} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="total">Total</label>
                                        <input name="total" type="number" className="form-control" defaultValue={this.state.total} onChange={this.handleChangeTotal} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    {/* si el registro ya existe, modifica, sino, guarda */}
                                    {
                                        this.state.edit ?
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkUpdate()}>Actualizar</button>
                                            :
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkRecibo()}>Guardar</button>
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
        return this.state.recibo.map((data) => {
            return (
                <tr>
                    <td>{data.idRecibo}</td>
                    <td>{data.codigoUsuario}</td>
                    <td>{data.idDetalle}</td>
                    <td>{data.total}</td>
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

    handleChangeUsuario(event) {
        this.setState({ codigoUsuario: event.target.value });
    }

    handleChangeDetalle(event) {
        this.setState({ idDetalle: event.target.value });
    }

    handleChangeTotal(event) {
        this.setState({ total: event.target.value });
    }

    //función para ingresar una nueva mascota
    sendNetworkRecibo() {
        //mete los datos en un formData
        const formData = new FormData()
        formData.append('idRecibo', this.state.idRecibo)
        formData.append('codigoUsuario', this.state.codigoUsuario)
        formData.append('idDetalle', this.state.idDetalle)
        formData.append('total', this.state.total)
        //pasa los datos a la ruta definida en routes>api.php
        axios.post(baseUrl + 'api/recibo/nuevo', formData).then(response => {
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
        formData.append('codigoUsuario', this.state.codigoUsuario)
        formData.append('idDetalle', this.state.idDetalle)
        formData.append('total', this.state.total)

        axios.post(baseUrl + 'api/recibo/editar', formData).then(response => {

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

        axios.post(baseUrl + 'api/recibo/eliminar', formData).then(response => {

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

        axios.get(baseUrl + 'api/recibo/list').then(response => {
            this.setState({
                recibo: response.data
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
            codigoUsuario: data.codigoUsuario,
            idDetalle: data.idDetalle,
            total: data.total,
            edit: true
        })
        $("#exampleModal").modal("show");
    }
};

if (document.getElementById('crud-recibos')) {
    ReactDOM.render(<RecibosForm />, document.getElementById('crud-recibos'));
}
