export const setUniqueOfficesArray = (array) => {
    let countries = [];
    array.map(office => {
        countries.push(office.country.toLowerCase());
    });
    return [...new Set(countries)];
};