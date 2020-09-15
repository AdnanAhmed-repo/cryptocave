import React from 'react';


const cc = require('cryptocompare');

export const AppContext = React.createContext();


export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
          page:  'News',
          ...this.savedSettings(),
          setPage: this.setPage,
          confirmFavorites: this.confirmFavorites
        }

    }


    componentDidMount = () => {
        this.fetchCoins();
    }
    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'MyCoins'
        });
        localStorage.setItem('cryptoCave', JSON.stringify({
            test: 'hello'
        }));
    }
     
    savedSettings(){
        let cryptoCaveData = JSON.parse(localStorage.getItem('cryptoCave'));
        if(!cryptoCaveData){
            return {page: 'Search', firstVisit: true}
        }
        return {}
    }

    setPage = page => this.setState({page})
    render (){
        return (
            <AppContext.Provider value={this.state}>
               {this.props.children} 
            </AppContext.Provider>
        )
    }
    }