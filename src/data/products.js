const products = [
    {
        order: '232JODJSDKN2',
        item: '232FODJSDKN2',
        details: 'No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)',
        colors: 'Royal',
        qty: 'L X 4',
        printType: 'DTG Print',
        method: 'rush',
        deliveryTime: '23 - June - 2019',
        timeLeft: '10:00:00',
        status: 'Running 2 of 5',
        paid: true
    },
    {
        order: '232JODJSDKN2',
        item: '232FODJSDKN2',
        details: 'No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)',
        colors: 'Royal',
        qty: 'L X 4',
        printType: 'DTG Print',
        method: 'rush',
        deliveryTime: '23 - June - 2019',
        timeLeft: '10:00:00',
        status: 'Running 2 of 5',
        paid: false
    },
    {
        order: '232JODJSDKN2',
        item: '232FODJSDKN2',
        details: 'No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)',
        colors: 'Royal',
        qty: 'L X 4',
        printType: 'DTG Print',
        method: 'rush',
        deliveryTime: '23 - June - 2019',
        timeLeft: '10:00:00',
        status: 'Running 2 of 5',
        paid: true
    },
    {
        order: '232JODJSDKN1',
        item: '232FODJSDKN1',
        details: 'No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)',
        colors: 'Royal',
        qty: 'L X 4',
        printType: 'DTG Print',
        method: 'pickup',
        deliveryTime: '23 - June - 2019',
        timeLeft: '10:00:00',
        status: 'Running 2 of 5',
        paid: true
    },
    {
        order: '232JODJSDKN1',
        item: '232FODJSDKN1',
        details: 'No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)',
        colors: 'Royal',
        qty: 'L X 4',
        printType: 'DTG Print',
        method: 'rush',
        deliveryTime: '23 - June - 2019',
        timeLeft: '10:00:00',
        status: 'Running 2 of 5',
        paid: true
    },
    {
        order: '232JODJSDKN1',
        item: '232FODJSDKN1',
        details: 'No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)',
        colors: 'Royal',
        qty: 'L X 4',
        printType: 'DTG Print',
        method: 'rush',
        deliveryTime: '23 - June - 2019',
        timeLeft: '10:00:00',
        status: 'Running 2 of 5',
        paid: true
    },
];

export const getProducts = (order = null) => {
    if(order){
        return products.filter(({order: productOrder}) => productOrder === order)
    }
    return products;
};