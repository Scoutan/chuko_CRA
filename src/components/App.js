import './App.css';
import React from 'react';
import Menu from './Menu';
import ItemList from './ItemList';
import FetchInfo from './FetchInfo';
import FetchTestDB from '../api/FetchTestDB.json';
//import itemsAPI from '../api/items';
import LoadStatic from '../api/db.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      items: [],
      loadingItems: 0,
      loadingSearch: false,
      pendingStockUpdate: [],
      inputError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFetchStock = this.handleFetchStock.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  async handleLoad() {
    //const res = await itemsAPI.get('/items');

    //this.setState({ items: res.data });
    this.setState({ items: LoadStatic.items })
  }

  async handleTest() {
    const items = FetchTestDB.items;
    this.setState({ loadingItems: items.length });

    const res = await Promise.all(await FetchInfo(items));

    this.setState({
      items: res,
      loadingItems: 0
    });
  }

  async handleSave() {
    const items = this.state.items;
    items.map(async item => {
      console.log("Saved: " + item.itemID);
      //return await itemsAPI.post('/items', { ...item });
    })
  }

  async handleClear() {
    /*const res = await itemsAPI.get('/items');

    res.data.map(async item => {
      console.log("Cleared ID: " + item.id);
      return itemsAPI.delete(`/items/${item.id}`)
    })
    */
  }

  handleChange(event) {
    this.setState({
      url: event.target.value,
      inputError: false
    });
  }

  async handleFetch() {
    if (this.state.url !== '') {
      const result = await FetchInfo(this.state.url);

      if (Array.isArray(result)) {
        this.setState({ items: [...this.state.items, result] })
      }
    } else {
      this.setState({ inputError: true })
    }
  }

  async handleFetchStock(event) {
    const itemIndex = event.target.value;
    const items = this.state.items;

    this.setState({ pendingStockUpdate: [...this.state.pendingStockUpdate, itemIndex] }, async () => {
      const result = await FetchInfo(items[itemIndex]);
      items[itemIndex] = result;

      this.setState({
        items: items,
        pendingStockUpdate: this.state.pendingStockUpdate.filter(index => index !== itemIndex)
      });
    });
  }

  async handleRemoveItem(event) {
    const items = this.state.items;
    items.splice(event.target.value, 1);
    this.setState({ items: items });
  }

  render() {
    return (
      <div className="global-container">
        <Menu
          load={() => this.handleLoad()}
          test={() => this.handleTest()}
          save={() => this.handleSave()}
          clear={() => this.handleClear()}
          loadingSearch={this.state.loadingSearch}
          inputValue={this.state.url}
          inputChange={this.handleChange}
          onFetch={() => this.handleFetch()}
        />
        <ItemList
          items={this.state.items}
          loadingItems={this.state.loadingItems}
          pendingStockUpdate={this.state.pendingStockUpdate}
          fetchStock={this.handleFetchStock}
          removeItem={this.handleRemoveItem}
        />
      </div>
    );
  }
}

export default App;