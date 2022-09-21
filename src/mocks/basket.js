
import logo from '../../assets/logo.png';
import tomate from '../../assets/fruit/Tomate.png';
import batata from '../../assets/fruit/Batata.png';
import pepino from '../../assets/fruit/Pepino.png';
import broculis from '../../assets/fruit/Brócolis.png';
import abobora from '../../assets/fruit/Abóbora.png';


const basket = {
    header: {
        title: "Detalhe da Cesta"
    }, 
    details: {
        name: "Cesta de Verduras",
        farmLogo: logo,
        farmName: "Furtado's Farm",
        description: "Uma cesta com produtos selecionados, cuidadosamente da fazenda Furtado's para sua cozinha.",
        price: "R$ 40.00",
        button: "Comprar",
    },
    itens: {
        title: "Itens da cesta",
        listItens: [
            {
                name: "Tomate",
                image: tomate,
            },
            {
                name: "Batata",
                image: batata,
            },
            {
                name: "Pepino",
                image: pepino,
            },
            {
                name: "Bróculis",
                image: broculis,
            },
            {
                name: "Abóbora",
                image: abobora,
            }
        ]
    }
}

export default basket;