import Model from "./model";

class GeoLocModel extends Model {
    initialize() {
        this.endpoint = "http://api.geonames.org/postalCodeLookupJSON";
        this.queryString = [];
        this.queryString.push({ username: "<<username>>" });
    }

    getGeoLocByZipCode(zipCode) {
        this.queryString.push({ postalcode: zipCode });

        return this.get();
    }
}

export default GeoLocModel;