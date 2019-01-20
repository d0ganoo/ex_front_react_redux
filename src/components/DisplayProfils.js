import React from 'react'

export const DisplayProfils = ({profils}) => {
    return (
        <table>
            <tbody>
                { profils && profils.map(profil => {
                    return (
                        <tr key={profil.id}>
                        <td><img src={profil.picture} alt="avatar"/></td>
                        <td>{profil.lastname}</td>
                        <td>{profil.firstname}</td>
                        <td>{profil.balance}</td>
                        </tr>   
                    )
                })} 
            </tbody>
        </table>
    );
}