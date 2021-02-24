const initialState = {
    loading: false,
    data: [
        {
            id: 0,
            city: 'Dubai, UAE',
            preview: 'https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441__340.jpg',
            phone: '+971 4 557 9388',
            fax: '+971 4 276 9669',
            address: 'Bay Square - building 01 - office 603 - business bay P.O box 29175 Dubai, U.A.E',
            email: 'info@geoco.ae',
            country: 'UAE'
        },
        {
            id: 1,
            city: 'Abu Dhabi Branch',
            preview: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681__340.jpg',
            phone: '+971 2 551 8496',
            fax: '+971 2 552 4173',
            address: 'Mussafah, near civil defence m37, office no. 01 p.o. box: 131286 abu dhabi, U.A.E.',
            email: 'info@geoco.ae',
            country: 'UAE'
        },
        {
            id: 2,
            city: 'Lebanon',
            preview: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            phone: '+961 9 646 964',
            fax: '+961 9 636 972',
            address: 'Variance building - 4th floor - sarba main road po box jounieh, Lebanon',
            email: 'info@geoco.ae',
            country: 'Lebanon'
        },
        {
            id: 3,
            city: 'KSA',
            preview: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            phone: '+961 9 646 964',
            fax: '+961 9 636 972',
            address: 'Variance building - 4th floor - sarba main road po box jounieh, Lebanon',
            email: 'info@geoco.ae',
            country: 'KSA'
        },
        {
            id: 4,
            city: 'Egypt',
            preview: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            phone: '+961 9 646 964',
            fax: '+961 9 636 972',
            address: 'Variance building - 4th floor - sarba main road po box jounieh, Lebanon',
            email: 'info@geoco.ae',
            country: 'Egypt'
        },
        {
            id: 5,
            city: 'Iraq',
            preview: 'https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            phone: '+961 9 646 964',
            fax: '+961 9 636 972',
            address: 'Variance building - 4th floor - sarba main road po box jounieh, Lebanon',
            email: 'info@geoco.ae',
            country: 'Iraq'
        },
    ],
    error: null
};

export default function officesReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}