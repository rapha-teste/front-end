import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'

import './Main.css'

import api from '../services/api'
import btnExcluir from '../assets/excluir4.png'
import loading from '../assets/load.gif'

export default function Main({ match }) {

    const [ data, setData ] = useState(new Date())
    const [ called, setCalled ] = useState({})
    var [ load, setLoad ] = useState(false)
    var [ despesaTotal, setDespesaTotal ] = useState([0])
    const dataFormated = (data.getMonth()+1)+'/'+data.getDate()+'/'+data.getFullYear()
    


    const months = ["Janeiro", "February", "March", "April", "May", "June", "July", "Agosto", "September", "October", "November", "December"];
    const dayOfWeek = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
    
    
    useEffect(() => {

    async function renderCalled() {
        let id = match.params.id

        const response = await api.get(`/called/${id}`, {
            headers: { data: dataFormated,
            }
        })
        setCalled(response.data.calleds)
        
    }
    renderCalled()
    
    setTimeout(() => {
        setLoad(true);
        editWeek()
    }, 500);
    

    }, [ data ]);
    

    useEffect(() => {

        async function calcDespesas() {
            
            let despesaCalled = 0;

            setDespesaTotal(despesaTotal = 0)
         
            for (let i in called) {

                despesaCalled = (called[i].distance*0.6+called[i].parking+called[i].toll)

                despesaTotal = despesaTotal+despesaCalled

                setDespesaTotal(despesaTotal.toFixed(2))
            }
        }
        calcDespesas()

        }, [ called ]);

    async function loadCalled() {
        let id = match.params.id

        const response = await api.get(`/called/${id}`, {
            headers: { data: dataFormated,
            }
        })
        setCalled(response.data.calleds)
        
    }
    
    function onChange(dateSelected) {
        setData(dateSelected)
    }

    function editWeek(){
        var abbr = document.querySelectorAll('abbr')

        for (let i in abbr){
            
            switch (abbr[i].title) {
                case 'segunda-feira':
                    abbr[i].innerHTML = dayOfWeek[i];
                    break;
                case 'terça-feira':
                    abbr[i].innerHTML = dayOfWeek[i];
                    break;
                case 'quarta-feira':
                    abbr[i].innerHTML = dayOfWeek[i];
                    break;
                case 'quinta-feira':
                    abbr[i].innerHTML = dayOfWeek[i];
                    break;
                case 'sexta-feira':
                    abbr[i].innerHTML = dayOfWeek[i];
                    break;
                case 'sábado':
                    abbr[i].innerHTML = dayOfWeek[i];
                    break;
                case 'domingo':
                    abbr[i].innerHTML = dayOfWeek[i];
                    break;
                default:
                    return;
            }
        }

        
    }

    const [customer, setCustomer ] = useState('')
    const [id_called, setId_called ] = useState('')
    const [qtd_called, setQtdCalled ] = useState('')
    const [distance, setDistance ] = useState('')
    const [parking, setParking] = useState('')
    const [toll, setToll ] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();

        const inputsEl = document.querySelectorAll('.form-new-called__input')

        await api.post('/called', { 
                id_customer: customer, 
                id_user: match.params.id,
                id_called: id_called, 
                qtd_called: qtd_called,
                date: dataFormated,
                distance: distance, 
                parking: parking,
                toll: toll
            }
        )
        .then(() => {
            loadCalled();

            setCustomer('')
            setId_called('')
            setQtdCalled('')
            setDistance('')
            setToll('')
            setParking('')

            for (let i = 0; i < 6; i++) {
                inputsEl[i].value =''
            }           
        })
    }

    async function deleteCalled(idCalled) {

        await api.delete('/called', { 
                headers: { id:idCalled, 
            }
        })
        .then(() => {
            loadCalled();
        })
    }

    async function editCalled(idCalled) {
        const inputsEl = document.querySelectorAll('.form-new-called__input')

        document.querySelector('.section-right__title').innerHTML = 'Editar Chamado'
        document.querySelector('.form-new-called__button').innerHTML = 'CONFIRMAR'

        called.map(element => {

            if(element._id === idCalled) {

                inputsEl[0].value = element.id_customer
                inputsEl[1].value = element.id_called
                inputsEl[2].value = element.qtd_called
                inputsEl[3].value = element.distance
                inputsEl[4].value = element.parking
                inputsEl[5].value = element.toll

            }

        })

        // await api.put('/called', { 
        //         headers: { id:idCalled, 
        //     }
        // })
        // .then(() => {
        //     loadCalled();
        // })
    }

    return ( 
        <>
        {load ? (
        <div className="container-main">
            <section className="section-left">
                <div className="section-int">
                    <div>
                        <Calendar
                            onChange={onChange}
                            value={data}
                        />
                        <div className="report-area">
                            <header className="title">
                                    Gerar Relatório
                            </header>
                            <form className="report-form">
                                <div className="row">
                                    <label className="label">De: </label>
                                    <select className="report-form__select">
                                        <option >Dia</option>
                                        <option defaultValue value="1">1</option>
                                        <option value="2">2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                    </select>
                                    <select className="report-form__select">
                                        <option>Mes</option>
                                        <option>Jan</option>
                                        <option>Fev</option>
                                        <option>Mar</option>
                                        <option>Abr</option>
                                        <option>Mai</option>
                                        <option>Jun</option>
                                        <option>Jul</option>
                                        <option defaultValue value="8">Ago</option>
                                        <option>Set</option>
                                        <option>Out</option>
                                        <option>Nov</option>
                                        <option>Dez</option>
                                    </select>
                                    <select className="report-form__select">
                                        <option>Ano</option>
                                        <option defaultValue>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                    </select>
                                </div>
                                <div className="row mg-top10">
                                    <label className="label">até: </label>
                                    <select className="report-form__select">
                                        <option >Dia</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option defaultValue>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                    </select>
                                    <select className="report-form__select">
                                        <option>Mes</option>
                                        <option>Jan</option>
                                        <option>Fev</option>
                                        <option>Mar</option>
                                        <option>Abr</option>
                                        <option>Mai</option>
                                        <option>Jun</option>
                                        <option>Jul</option>
                                        <option defaultValue>Ago</option>
                                        <option>Set</option>
                                        <option>Out</option>
                                        <option>Nov</option>
                                        <option>Dez</option>
                                    </select>
                                    <select className="report-form__select" defaultValue="2019">
                                        <option>Ano</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2021</option>
                                        <option value="2019">2022</option>
                                    </select>
                                <input className="report-form__button button bg-primary" value="OK" type="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <>
            <section className="section-center">
                    <div className="section-center__grid">
                        <header className="title section-center__title">
                            {data.getDate()+' de '+(months[data.getMonth()])+' de '+data.getFullYear()}
                            <div className="rodape-total    ">
                                <label className="section-center__label-total">Total:</label>
                                <div className="despesaTotal">R$ {despesaTotal}</div>
                            </div>
                        </header>
                        
                        <div className="section-center__called">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="table__th" width="23%">Loja</th>
                                    <th className="table__th" width="20%">Nº Chamado</th>
                                    <th className="table__th col-qtd" width="27%">Qtd Chamados</th>
                                    <th className="table__th" width="28%">Despesas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {called.length > 0 ? called.map(e => (
                                    <tr id={e._id} key={e._id} onClick={() => editCalled(e._id)} className="table__tr">
                                        <th>{e.id_customer}</th>
                                        <th>{e.id_called}</th>
                                        <th className="col-qtd">{e.qtd_called}</th>
                                        <th className="table__col-excluir">
                                            R$ {e.distance > 0 || e.parking > 0 || e.toll > 0 
                                                ? (e.distance*0.6+e.parking+e.toll).toFixed(2)
                                                : ('0.00')}
                                            <img onClick={() => deleteCalled(e._id)} src={btnExcluir} width="8px" alt="a"/>
                                        </th>
                                    </tr>
                                ))  :   (
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        </div>                
                        {/* <div className="rodape-total">
                            <label className="section-center__label-total">Total:</label>
                            <div className="despesaTotal">R$ {despesaTotal}</div>
                        </div> */}
                    </div>
            </section>
            <section className="section-right">
                <div className="section-int">
                <header className="title section-right__title">Novo Chamado</header>
                <form className="form-new-called" onSubmit={handleSubmit}>
                    <label className="form-new-called__label">Sigla Cliente</label>
                    <input className="form-new-called__input"
                    onChange={ e => setCustomer(e.target.value)}
                    autoFocus/>
                    <label className="form-new-called__label">Nº Chamado</label>
                    <input className="form-new-called__input"
                    onChange={ e => setId_called(e.target.value)} />
                    <label className="form-new-called__label">Qtd Chamados</label>
                    <input className="form-new-called__input"
                    onChange={ e => setQtdCalled(e.target.value)} />
                    <label className="form-new-called__label">Quilometragem</label>
                    <input className="form-new-called__input"
                    onChange={ e => setDistance(e.target.value)}></input>
                    <label className="form-new-called__label">Estacionamento</label>
                    <input className="form-new-called__input"
                    onChange={ e => setParking(e.target.value)}></input>
                    <label className="form-new-called__label">Pedágio</label>
                    <input className="form-new-called__input"
                    onChange={ e => setToll(e.target.value)}></input>
                    <button className="form-new-called__button button bg-success " type="submit">REGISTRAR CHAMADO</button>
                </form>
                </div>
            </section> 
            </>
            
        </div>
        ) : (<div className="container-load"><img className="loading" src={loading} alt="a" width="60px"/></div>)}
    </>    
    )
}