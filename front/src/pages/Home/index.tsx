import React, { useState, useEffect ,ChangeEvent, FormEvent } from 'react';
import swal from 'sweetalert';
import api from '../../service/api';
import Navbar from '../../components/Navbar';
import Head from '../../components/Head';
import Footer from '../../components/Footer';
import { Container, DescountContainer, Descount } from './styles';


interface IDescounts {
    withFaleMais: number;
    withoutFaleMais: number;
}

interface IPlans {
    name: string;
    id: string;
}


const Home: React.FC = () => {

    const [result, setResult] = useState<IDescounts>();
    const [plans, setPlans] = useState<IPlans[]>([]);

    const [formData, setFormData] = useState({
        origin: '',
        destiny: '',
        minutes: '',
    });

    const [selectedPlan, setSelectedPlan] = useState('0');

    useEffect(() => {
        api.get('/plans').then(res => {
            const plans = res.data;
            setPlans(plans);
        })
    }, []);    

    function handleSelectPlan(ev: ChangeEvent<HTMLSelectElement>) {
        const plan = ev.target.value;
        setSelectedPlan(plan);
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
            const { origin, destiny, minutes} = formData;
            const idPlan = selectedPlan;            
            
            await api.get('/descount', {
                params:{
                    origin,
                    destiny,
                    minutes,
                    idPlan,
                }
            })
            .then(res => setResult(res.data))
            .catch(err => {
                swal("Erro!", err.response.data.message, "error");
                setResult(undefined);
            });   
                

    }
    
    console.log("result:",result);
    return (
        <>
            <Navbar></Navbar>
            <Head></Head>
            <Container>
            <form onSubmit={handleSubmit}>
                <h1>Pesquise nossos preços de acordo com o DDD</h1>
                <fieldset>
                    <div className="field">
                        <label htmlFor="origin">DDD origem</label>
                        <input 
                            type="text"
                            name="origin"
                            id="origin"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="destiny">DDD Destino</label>
                        <input 
                            type="text"
                            name="destiny"
                            id="destiny"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="minutes">Quantidade de Minutos</label>
                        <input
                            type="number"
                            name="minutes"
                            id="minutes"
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="field">
                            <label htmlFor="uf">Plano</label>
                            <select name="uf" id="uf" value={selectedPlan} onChange={handleSelectPlan}>
                                <option value="">Selecione um Plano</option>
                                {plans.map(plan => (
                                    <option key={plan.id} value={plan.id}>{plan.name}</option>
                                ))}
                            </select>
                        </div>
                </fieldset>
                <button type="submit">Visualizar Preços</button>
            </form>
            </Container>
            {typeof (result) != 'undefined' &&
                <>
                <DescountContainer>
                    <Descount>
                        <strong>Com Plano Fale Mais</strong>
                        <p>{result.withFaleMais.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        <button>Assinar</button>
                    </Descount>
                    <Descount>
                        <strong>Sem o Plano Fale Mais</strong>
                        <p>{result.withoutFaleMais.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </Descount>
                </DescountContainer>
                </>
            }
            <Footer></Footer>
        </>
    )
}

export default Home;