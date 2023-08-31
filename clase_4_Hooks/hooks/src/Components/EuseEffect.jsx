//Se ejecuta cuando el componente ya ha sido montado
//Se utiliza para manejar efectos secundarios y lógica que ocurre después de la renderización
    //Hace que cierto codigo se ejecute despues de que se haya rendereizado el componente 
    //Podemos pedirle que cuando se actualice cualquier variable o estado se ejecute 
    //Se desarrolla de la siguiente manera 
    
    //useEffect(()=>{
    // logica    
    //}[variables a actualizar])

    import React, { useState, useEffect } from 'react';

    const EuseEffect = () => {
    
        const [users, setUsers] = useState([]);

        useEffect(() => {
            // Realiza una solicitud a la API JSONPlaceholder para obtener datos de usuarios
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setUsers(data));
        }, []);
    
        return (
            <div>
            <h1>Lista de Usuarios</h1>
            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Nombre</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{user.id}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
    };
    
    export default EuseEffect;



