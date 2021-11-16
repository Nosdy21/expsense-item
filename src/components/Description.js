import React from 'react';

const description = [
        {
            id: 0,
            text: 'S konfiguracijom do 4-jezgrenog procesora Intel Core i7 desete generacije, 13-inčni MacBook Pro spreman je i najteže zadatke, poput kompiliranja koda, slaganja različitih kanala u glazbenu kompoziciju ili kodiranja videozapisa. Sve radi kao od šale. Osim toga, po prvi put možeš konfigurirati 32 GB memorije na 13-inčnom MacBooku Pro i time ostvariti do 50 % brže performanse pri obradi ogromnih slika u Photoshopu, učitavanju više virtualnih instrumenata te pokretanju više virtualnih uređaja.',
        },
        {
            id: 1,
            text:'',
        },
        {
            id: 2,
            text:'',
        },
        {
            id: 3,
            text:'',
        },
        {
            id: 4,
            text:'',
        },
]

const Description = ({ description }) => {
    return (
        <>
        {description.map((description) => (
        <h3 key={description.id}>{description.text}</h3>
        ))}
        </> 
    )
}



       

export default Description;