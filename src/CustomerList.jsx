import React, { Component } from "react";

export default class CustomerList extends Component {

    state = {
        pageTitle: 'Habib',
        customersCount: 10,
        customers: [
            { id: 1, name: 'Habib', phone: '0911101010', address: { city: 'Addis', country: 'Ethiopia' }, photo: 'https://picsum.photos/id/1010/60' },
            { id: 2, name: 'eliyas', phone: '0911201010', address: { city: 'Adama', country: 'Ethiopia' }, photo: 'https://picsum.photos/id/1011/60' },
            { id: 3, name: 'kerim', phone: '0911301010', address: { city: 'Bahirdar', country: 'Ethiopia' }, photo: 'https://picsum.photos/id/1012/60' },
            { id: 4, name: 'Ahmed', phone: null, address: { city: 'Mekele', country: 'Ethiopia' }, photo: 'https://picsum.photos/id/1013/60' },
            { id: 5, name: 'Zeyba', phone: '0911501010', address: { city: 'Harar', country: 'Ethiopia' }, photo: 'https://picsum.photos/id/1014/60' }
        ]
    }

    styleName = (name)=>{
        if(name.startsWith("H")) return "green-highlight border-start";
        else if(name.startsWith("A")) return "red-highlight border-end";
        else return "";
    }

    render() {
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
                    <span className="badge bg-secondary m-1">{this.state.customersCount}</span>
                    <button className="btn btn-info" onClick={this.onRefresh}>Refresh</button>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listCustomer()}
                    </tbody>

                </table>
            </div>
        )

    }

    onRefresh = () => {
        this.setState({ customersCount: 15 })
    }

    checkPhone = (phone) => {
        //check if null
        return (phone ? (phone) : (<div className="bg-warning p-2 text-center">No Phone</div>))
    }

    listCustomer = () => {
        return (
            this.state.customers.map((cust, index) => {

                return (
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>
                            <img src={cust.photo} alt='cutomer'/>
                            <div>
                                <button className="btn btn-sm btn-secondary" onClick={()=>{this.onChagePicture(cust, index)}}>Change Picture</button>
                            </div>
                        </td>
                        <td className={this.styleName(cust.name)}>{cust.name}</td>
                        <td>
                            {this.checkPhone(cust.phone)}
                        </td>
                        <td>{cust.address.city + ', ' + cust.address.country}</td>
                    </tr>
                )

            })
        )
    }

    onChagePicture = (cust, index)=>{
        var custArr = this.state.customers
        custArr[index].photo = 'https://picsum.photos/id/104/60'
        this.setState({customers:custArr})
    }

}