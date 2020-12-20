import React, { useState, useEffect ,ChangeEvent, FormEvent } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './styles.css';
// import Card from '../../components/Card';

import axios from 'axios';
import { ListFormat } from 'typescript';
import api from '../../service/api';


interface IDescounts {
    withFaleMais: number;
    withoutFaleMais: number;
}

interface IBGEUFRes {
    name: string;
    id: string;
}


const Home: React.FC = () => {

    // const [items, setItems] = useState<Item[]>([]);
    const [result, setResult] = useState<IDescounts>();
    const [ufs, setUfs] = useState<IBGEUFRes[]>([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
    });

    const [selectedUf, setSelectedUf] = useState('0');

    useEffect(() => {
        api.get('/plans').then(res => {
            const plans = res.data;
            setUfs(plans);
        })

    }, []);    

    function handleSelectUf(ev: ChangeEvent<HTMLSelectElement>) {
        const uf = ev.target.value;
        setSelectedUf(uf);
    }

    function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
        const { name, value} = ev.target;

        setFormData({
            ...formData,
            [name]: value
        });        
    }

    async function handleSubmit(ev: FormEvent) {
        ev.preventDefault();
        const { name, email, whatsapp} = formData;
        // const uf = selectedUf;
        const origin = name;
        const destiny = email;
        const minutes = whatsapp;
        const idPlan = selectedUf;
        // const city = selectedCity;
        // const [latitude, longitude] = selectedPositon;
        // const items = selectedItems;
        const data = {
            origin,
            destiny,
            minutes,
            idPlan,
            // city,
            // latitude,
            // longitude,
            // items
        };
        console.log(name);
        console.log(email);
        console.log(whatsapp);
        console.log(idPlan);
        
        
        await api.get('/descount', {
            params:{
                origin,
                destiny,
                minutes,
                idPlan,
            }
        }).then(res => setResult(res.data));
        console.log("result:",result);
        
        

        
        // history.push('/');
    }
    return (
        <>
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="VxTel"/>
                </header>
                <main>
                    <h1>
                        A melhor operadora de Telefonia do Brasil.
                    </h1>
                    <p>Escolha um de nossos planos e veja todos os benefícios disponíveis para nossos clientes.</p>

                    {/* <Link to="/create-point">
                        <strong>Nossos planos</strong>
                    </Link> */}
                </main>
                <form onSubmit={handleSubmit}>
                <h1>Cadastro do <br/>
                ponto de coleta</h1>

                <fieldset>
                    <legend><h2>Dados</h2></legend>
                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text"
                                name="email"
                                id="email"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input 
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf" value={selectedUf} onChange={handleSelectUf}>
                                <option value="0">Selecione um Estado</option>
                                {ufs.map(uf => (
                                    <option key={uf.id} value={uf.id}>{uf.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>
                {/* <fieldset>
                    <legend>
                        <h2>Itens de coleta</h2>
                        <span>Selecione um ou mais filtros abaixo</span>
                    </legend>
                    <ul className="items-grid">
                        {items.map(item => (
                            <li 
                                key={item.id}
                                onClick={() => handleSelectItem(item.id)}
                                className={selectedItems.includes(item.id) ? 'selected' : ''}
                             > 
                                <img src={item.image_url} alt={item.title}/>
                                <span>{item.title}</span>
                            </li>
                        ))}                        
                    </ul>
                </fieldset> */}

                <button type="submit">Visualizar Preços</button>
            </form>
            {/* <Card withFaleMais={result?.withFaleMais} withoutFaleMais={result?.withoutFaleMais}></Card> */}
            </div>
        </div>
        </>
    )
}

export default Home;