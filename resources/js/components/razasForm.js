import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = 'http://localhost/control-mascotas-react/public/';

export default class RazasForm extends Component {

    //constructor que inicializa las variables de la clase
    constructor(props) {
        super(props);
        this.state = {
            raza: [],
            idRaza: '',
            nombreRaza: '',
            especie: '',
            edit: false
        }
        //handlers para capturar el valor de los campos cuando cambian
        this.handleChangeIdRaza = this.handleChangeIdRaza.bind(this);
        this.handleChangeNombreRaza = this.handleChangeNombreRaza.bind(this);
        this.handleChangeEspecie = this.handleChangeEspecie.bind(this)
    }
    //cuando el componente se genera, hace la conexión al backend
    componentDidMount() {
        axios.get(baseUrl + 'api/raza/list').then(response => {
            this.setState({ raza: response.data })
        }).catch(error => {
            alert("Error " + error)
        })
    }
    //render del jsx a html
    render() {
        return (
            <div className="container">
                <h3>Razas</h3>
                <hr />
                <button type="button" className="btn btn-primary col-md-4" data-toggle="modal" data-target="#exampleModal">
                    Ingrese la raza
              </button>
                <table className="table table-bordered order-table ">
                    <thead>
                        <tr>
                            <th>ID Raza</th>
                            <th>Especie</th>
                            <th>Nombre de la raza</th>
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de razas</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="idRaza">id de la raza</label>
                                        <input type="text" name="idRaza" className="form-control" defaultValue={this.state.idRaza} onChange={this.handleChangeIdRaza} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="especie">Especie</label>
                                        <select name="especie" defaultValue={this.state.especie} onChange={this.handleChangeEspecie}>
                                            <option value="">-- Seleccione una especie --</option>
                                            <option value="1">Perro</option>
                                            <option value="2">Gato</option>
                                            <option value="3">Conejo</option>
                                            <option value="4">Loro</option>
                                            <option value="5">Perico</option>
                                            <option value="5">Tortuga</option>
                                            <option value="5">Hamster</option>
                                            <option value="5">Perico</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombreRaza">Nombre de la raza</label>
                                        <input type="text" name="nombreRaza" className="form-control" defaultValue={this.state.nombreRaza} onChange={this.handleChangeNombreRaza} />
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de razas</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="idRaza">id de la raza</label>
                                        <input type="text" name="idRaza" className="form-control" defaultValue={this.state.idRaza} onChange={this.handleChangeIdRaza} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="especie">Especie</label>
                                        <select name="especie" defaultValue={this.state.especie} onChange={this.handleChangeEspecie}>
                                            <option value="">-- Seleccione una especie --</option>
                                            <option value="1">Perro</option>
                                            <option value="2">Gato</option>
                                            <option value="3">Conejo</option>
                                            <option value="4">Loro</option>
                                            <option value="5">Perico</option>
                                            <option value="5">Tortuga</option>
                                            <option value="5">Hamster</option>
                                            <option value="5">Perico</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombreRaza">Nombre de la raza</label>
                                        <input type="text" name="nombreRaza" className="form-control" defaultValue={this.state.nombreRaza} onChange={this.handleChangeNombreRaza} />
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
        return this.state.raza.map((data) => {
            return (
                <tr>
                    <td>{data.idRaza}</td>
                    <td>{data.especie}</td>
                    <td>{data.nombreRaza}</td>
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
    handleChangeIdRaza(event) {
        this.setState({ idRaza: event.target.value });
    }

    handleChangeNombreRaza(event) {
        this.setState({ nombreRaza: event.target.value });
    }

    handleChangeEspecie(event) {
        this.setState({ especie: event.target.value });
    }

    //función para ingresar una nueva mascota
    sendNetworkServ() {
        //mete los datos en un formData
        const formData = new FormData()
        formData.append('idRaza', this.state.idRaza)
        formData.append('especie', this.state.especie)
        formData.append('nombreRaza', this.state.nombreRaza)
        //pasa los datos a la ruta definida en routes>api.php
        axios.post(baseUrl + 'api/raza/nuevo', formData).then(response => {
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
        formData.append('idRaza', this.state.idRaza)
        formData.append('especie', this.state.especie)
        formData.append('nombreRaza', this.state.nombreRaza)

        axios.post(baseUrl + 'api/raza/editar', formData).then(response => {

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
        formData.append('idRaza', this.state.idRaza)

        axios.post(baseUrl + 'api/raza/eliminar', formData).then(response => {

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

        axios.get(baseUrl + 'api/raza/list').then(response => {
            this.setState({
                raza: response.data
            })
        }).catch(error => {
            alert("Error " + error)
        })

    }

    showModalDelete(data) {
        // id seleccionado para eliminar
        this.setState({ idRaza: data.idRaza })
        $("#exampleModalDelete").modal("show");
    }

    showModalEdit(data) {
        //alert("mostrar modal "+JSON.stringify(data))
        this.setState({
            idRaza: data.idRaza,
            especie: data.especie,
            nombreRaza: data.nombreRaza,
            edit: true
        })
        $("#exampleModal").modal("show");
    }
};

if (document.getElementById('crud-razas')) {
    ReactDOM.render(<RazasForm/>, document.getElementById('crud-razas'));
}