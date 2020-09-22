import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = 'http://localhost/control-mascotas-react/public/';

export default class MascotasForm extends Component {

    //constructor que inicializa las variables de la clase
    constructor(props) {
        super(props);
        this.state = {
            mascota: [],
            codigoMascota: '',
            razaMascota: 0,
            nombreMascota: '',
            birthYear: '',
            notas: '',
            edit: false
        }
        //handlers para capturar el valor de los campos cuando cambian
        this.handleChangeCodigo = this.handleChangeCodigo.bind(this);
        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangeRaza = this.handleChangeRaza.bind(this)
        this.handleChangeNacimiento = this.handleChangeNacimiento.bind(this)
        this.handleChangeNotas = this.handleChangeNotas.bind(this)
    }
    //cuando el componente se genera, hace la conexión al backend
    componentDidMount() {
        axios.get(baseUrl + 'api/mascota/list').then(response => {
            this.setState({ mascota: response.data })
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
                            <th>Código de mascota</th>
                            <th>Raza</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Indicaciones especiales</th>
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
                                        <label htmlFor="codigoMascota">Código de mascota</label>
                                        <input type="text" name="codigoMascota" className="form-control" defaultValue={this.state.codigoMascota} onChange={this.handleChangeCodigo} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="razaMascota">Raza</label>
                                        <select name="idRaza" defaultValue={this.state.razaMascota} onChange={this.handleChangeRaza}>
                                            <option value="">-- Seleccione una raza --</option>
                                            <option value="1">Maltés</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombreMascota">Nombre de mascota</label>
                                        <input name="nombreMascota" type="text" className="form-control" defaultValue={this.state.nombreMascota} onChange={this.handleChangeNombre} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="birthYear">Año de nacimiento</label>
                                        <select name="birthYear" defaultValue={this.state.birthYear} onChange={this.handleChangeNacimiento}>
                                            <option defaultValue="">-- Seleccione un año --</option>
                                            <option defaultValue="1998">1998</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="notas">Notas</label>
                                        <textarea name="notas" className="form-control" rows="3" defaultValue={this.state.notas} onChange={this.handleChangeNotas}></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkMascota()}>Guardar</button>
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
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de mascotas</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="codigoMascota">Código de mascota</label>
                                        <input type="text" name="codigoMascota" className="form-control" defaultValue={this.state.codigoMascota} onChange={this.handleChangeCodigo} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="razaMascota">Raza</label>
                                        <select name="idRaza" value={this.state.value} onChange={this.handleChangeRaza}>
                                            <option value="">-- Seleccione una raza --</option>
                                            <option value="1">Maltés</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombreMascota">Nombre de mascota</label>
                                        <input name="nombreMascota" type="text" className="form-control" defaultValue={this.state.nombreMascota} onChange={this.handleChangeNombre} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="birthYear">Año de nacimiento</label>
                                        <select name="birthYear" defaultValue={this.state.birthYear} onChange={this.handleChangeNacimiento}>
                                            <option defaultValue="">-- Seleccione un año --</option>
                                            <option defaultValue="1998">1998</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="notas">Notas</label>
                                        <textarea name="notas" className="form-control" rows="3" defaultValue={this.state.notas} onChange={this.handleChangeNotas}></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    {/* si el registro ya existe, modifica, sino, guarda */}
                                    {
                                        this.state.edit ?
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkUpdate()}>Actualizar</button>
                                            :
                                            <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkMascota()}>Guardar</button>
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
        return this.state.mascota.map((data) => {
            return (
                <tr>
                    <td>{data.codigoMascota}</td>
                    <td>{data.idRaza}</td>
                    <td>{data.nombreMascota}</td>
                    <td>{data.birthYear}</td>
                    <td>{data.notas}</td>
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
        this.setState({ codigoMascota: event.target.value });
    }

    handleChangeRaza(event) {
        this.setState({ razaMascota: event.target.value });
    }

    handleChangeNombre(event) {
        this.setState({ nombreMascota: event.target.value });
    }

    handleChangeNacimiento(event) {
        this.setState({ birthYear: event.target.value });
    }

    handleChangeNotas(event) {
        this.setState({ notas: event.target.value });
    }
    //función para ingresar una nueva mascota
    sendNetworkMascota() {
        //mete los datos en un formData
        const formData = new FormData()
        formData.append('codigoMascota', this.state.codigoMascota)
        formData.append('razaMascota', this.state.razaMascota)
        formData.append('nombreMascota', this.state.nombreMascota)
        formData.append('birthYear', this.state.birthYear)
        formData.append('notas', this.state.notas)
        //pasa los datos a la ruta definida en routes>api.php
        axios.post(baseUrl + 'api/mascota/nuevo', formData).then(response => {
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
        formData.append('codigoMascota', this.state.codigoMascota)
        formData.append('razaMascota', this.state.razaMascota)
        formData.append('nombreMascota', this.state.nombreMascota)
        formData.append('birthYear', this.state.birthYear)
        formData.append('notas', this.state.notas)

        axios.post(baseUrl + 'api/mascota/editar', formData).then(response => {

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
        formData.append('codigoMascota', this.state.codigoMascota)

        axios.post(baseUrl + 'api/mascota/eliminar', formData).then(response => {

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

        axios.get(baseUrl + 'api/mascota/list').then(response => {
            this.setState({
                mascota: response.data
            })
        }).catch(error => {
            alert("Error " + error)
        })

    }

    showModalDelete(data) {
        // id seleccionado para eliminar
        this.setState({ codigoMascota: data.codigoMascota })
        $("#exampleModalDelete").modal("show");
    }

    showModalEdit(data) {
        //alert("mostrar modal "+JSON.stringify(data))
        this.setState({
            codigoMascota: data.codigoMascota,
            razaMascota: data.razaMascota,
            nombreMascota: data.nombreMascota,
            birthYear: data.birthYear,
            notas: data.notas,
            edit: true
        })
        $("#exampleModal").modal("show");
    }
};

if (document.getElementById('crud-mascotas')) {
    ReactDOM.render(<MascotasForm/>, document.getElementById('crud-mascotas'));
}