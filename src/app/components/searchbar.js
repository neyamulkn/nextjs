"use client"

import axios from 'axios';
import {useState} from 'react'

const Searchbar = () => {
    const [formData, setState] = useState({name:'', email:'', phone: 'phone def', message: 'message'});

    const setData = (e) => {
        setState({
            ...formData,
            [e.target.name] : e.target.value
        });
    }
    const search = (e) => {
        e.preventDefault();

        const res = axios.post(process.env.NEXT_PUBLIC_URL+"/attraction/query/form", {name:'dsfs', email:'sdfsf', phone: 'phone def', message: 'message def'})
        .then(function(res){
            console.log(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    return (
        <div>
            <p>{formData.name}</p>
            <p>{formData.email}</p>
            <p>{formData.phone}</p>
            <p>{formData.message}</p>
          
           <form action="" onSubmit={search}>
                <div className="input-group">
                <div className="form-outline">
                <label className="form-label" >Search</label>
                    <input type="search" name='name' onChange={(e) => setData(e)} className="form-control" />
                    <input type="search" name='email' onChange={(e) => setData(e)} className="form-control" />  
                    <input type="search" name='phone' onChange={(e) => setData(e)} className="form-control" />  
                    <textarea name='message' onChange={(e) => setData(e)} className="form-control" ></textarea>
                </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    <i className="fas fa-search">Search</i>
                </button>
            </form>
        </div>
    )
}

export default Searchbar;