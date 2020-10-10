import { v4 as uuidv4 } from 'uuid';
const cars = {
    model: [
        {
            name: "PRO RS3",
            price: 300,
            id: uuidv4(),
            engine: [
                { 
                    name: "5.2L 532BHP",
                    id: uuidv4(),
                    price: 100,
                    gearbox: [
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]
                },
                {
                    name: "4.2L 443BHP",
                    id: uuidv4(),
                    price: 70,
                    gearbox: [
                        {
                          type: "Manual",
                          id: uuidv4(),
                          price: 30
                        },
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]
                },
                {
                    name: "3.6L 374BHP",
                    id: uuidv4(),
                    price: 50,
                    gearbox: [
                        {
                          type: "Manual",
                          id: uuidv4(),
                          price: 30
                        },
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]  
                },
                {
                    name: "2.0L 166BHP",
                    id: uuidv4(),
                    price: 20,
                    gearbox: [
                        {
                          type: "Manual",
                          id: uuidv4(),
                          price: 30
                        },
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]
                }
            ],
        },
        {
            name: "UBER RS3",
            price: 200,
            id: uuidv4(),
            engine: [
                { 
                    name: "5.2L 532BHP",
                    id: uuidv4(),
                    price: 100,
                    gearbox: [
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]
                },
                {
                    name: "4.2L 443BHP",
                    id: uuidv4(),
                    price: 70,
                    gearbox: [
                        {
                          type: "Manual",
                          id: uuidv4(),
                          price: 30
                        },
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]
                },
                {
                    name: "3.6L 374BHP",
                    id: uuidv4(),
                    price: 50,
                    gearbox: [
                        {
                          type: "Manual",
                          id: uuidv4(),
                          price: 30
                        },
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]  
                },
                {
                    name: "2.0L 166BHP",
                    id: uuidv4(),
                    price: 20,
                    gearbox: [
                        {
                          type: "Manual",
                          id: uuidv4(),
                          price: 30
                        },
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]
                }
            ]
        },
        {
            name: "STANDARD",
            price: 100,
            id: uuidv4(),
            engine: [
                { 
                    name: "5.2L 532BHP",
                    id: uuidv4(),
                    price: 100,
                    gearbox: [
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]
                },
                {
                    name: "4.2L 443BHP",
                    id: uuidv4(),
                    price: 70,
                    gearbox: [
                        {
                          type: "Manual",
                          id: uuidv4(),
                          price: 30
                        },
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]
                },
                {
                    name: "3.6L 374BHP",
                    id: uuidv4(),
                    price: 50,
                    gearbox: [
                        {
                          type: "Manual",
                          id: uuidv4(),
                          price: 30
                        },
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]  
                },
                {
                    name: "2.0L 166BHP",
                    id: uuidv4(),
                    price: 20,
                    gearbox: [
                        {
                          type: "Manual",
                          id: uuidv4(),
                          price: 30
                        },
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]
                }
            ]
        },
        {
            name: "WK",
            price: 50,
            id: uuidv4(),
            engine: [
                {
                    name: "2.0L 166BHP",
                    id: uuidv4(),
                    price: 20,
                    gearbox: [
                        {
                          type: "Manual",
                          id: uuidv4(),
                          price: 30
                        },
                        {
                            type: "Automatic",
                            id: uuidv4(),
                            price: 60
                        }
                    ]
                },
            ],
        }
    ]
}

export default cars;