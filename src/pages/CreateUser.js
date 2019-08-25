import React from 'react'
import './CreateUser.css'

export default function CreateUser() {
    return (
        <>
            <div className="container-create">
                <div className="box-create">
                    <header className="box-create__header">Cadastre-se grátis</header>
                    <form className="box-create__form">
                        <label className="box-create__label">Nome Completo</label>
                        <input className="box-create__input" placeholder="José da Silva"></input>
                        <label className="box-create__label" >Nome Usuário</label>
                        <input className="box-create__input" placeholder="jose.silva"></input>
                        <label className="box-create__label">Email</label>
                        <input className="box-create__input" placeholder="jose.silva@hotmail.com"></input>
                        <label className="box-create__label">Senha</label>
                        <input className="box-create__input"></input>
                        <label className="box-create__label">Confirme Senha</label>
                        <input className="box-create__input"></input>
                        <label className="box-create__label">Endereço</label>
                        <input className="box-create__input" placeholder="Rua Marnel"></input>
                        <label className="box-create__label">Cep</label>
                        <input className="box-create__input" placeholder="04460-020"></input>
                        <button className="box-create__button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}