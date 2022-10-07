export default [ 
    {
        id: crypto.randomUUID(),
        task: "Consulter mes mails.",
        deadline: '02:30',
        statut: 0, 
        date: new Date().toLocaleDateString(),
        description: "Me permettant d'être informé.", 
    },
    {
        id: crypto.randomUUID(),
        task: "Rendre visite à ma mère.",
        deadline: '03:00',
        statut: 1, 
        date: new Date().toLocaleDateString(),
        description: "Très important pour moi.", 
    },
];