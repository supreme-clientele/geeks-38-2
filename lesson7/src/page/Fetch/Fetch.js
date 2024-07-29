import React, { useState } from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/'
export const postAxiosForm = async(API, info)=> {
    console.log(API, info);
  await axios.post(`${BASE_URL}${API}`, {
        surname: info.surname, name: info.name, id: String(info.id), groupId:2
    })
    // console.log(response.status,'5555555555555')
    // if (response.status === 201 ) {
    //     getApiAxios('student').then(data=> setStudents(data))
    // }
    // const data = response.data
    // console.log(data,'postAxios ')
}

export const getApiAxios = async (API) => {
    const response = await axios(`${BASE_URL}${API}`)
    console.log(response.data)
    return response.data
}
const Fetch = () => {


    const [students, setStudents] = useState([])
    const getApiFetch =async (API) => {
        const response = await fetch(`${BASE_URL}${API}`)
        const data= await response.json()
        console.log(data);
        return data
    }

    const postApiFetch = async (API) => {
        await fetch(`${BASE_URL}${API}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({surname: 'Sariev', name: 'Bakyt', id: String(444), groupId:2})
        }).then(response => response.json()).then(data=> {
            console.log(data)
            getApiFetch('student').then(data=> setStudents(data))
        })
    }


    const postAxios = async(API)=> {
        const response = await axios.post(`${BASE_URL}${API}`, {
            surname: 'Sariev', name: 'Bakyt', id: String(444), groupId:2
        })
            console.log(response.status,'5555555555555')
        if (response.status === 201 ) {
            getApiAxios('student').then(data=> setStudents(data))
        }
        const data = response.data
        console.log(data,'postAxios ')
    }


    const patchAxios = async(API, id, name)=> {
        const response = await axios.patch(`${BASE_URL}${API}/${id}`, {
            name
        })
        if (response.status === 200 ) {
            getApiAxios('student').then(data=> setStudents(data))
        }
        console.log(response);
    }

    const deleteAxios = async (API, id) => {
        console.log(API, id);
        const response = await axios.delete(`${BASE_URL}${API}/${id}`)
        if (response.status === 200 ) {
            getApiAxios('student').then(data=> setStudents(data))
        }
        console.log(response);
    }

    return (
        <div>
            <button onClick={()=>getApiFetch('student').then(data=> setStudents(data))}>getApiFetch</button>
            <button onClick={()=>getApiAxios('student').then(data=> setStudents(data))}>getApiAxios</button>
            <button onClick={()=>postApiFetch('student')}>postApiFetch</button>
            <button onClick={()=>postAxios('student')}>postAxios</button>
            <button onClick={()=>patchAxios('student')}>patchAxios</button>
            {
                students.map(student=>
                    <div style={{display: 'flex'}}>
                        <p key={student.id}>{student.id}=>{student.name}</p>
                        <button onClick={()=>deleteAxios('student',student.id )}>удалить</button>
                        <button onClick={()=>patchAxios('student',student.id, 'Bakyt' )}>change</button>
                    </div>
                )}
        </div>
    );
};

export default Fetch;