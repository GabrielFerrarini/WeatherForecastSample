import Model from "./model";

class GeoLocModel extends Model {
    initialize() {
        this.endpoint = "http://api.geonames.org/postalCodeLookupJSON";
        this.queryString = [];
        this.queryString.push({ username: "<<username>>" });
    }
}

export default GeoLocModel;