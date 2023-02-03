import { TarrayString, TarrayNumber } from "../interface/interface";

const featured = () => {
    const prices:TarrayNumber = [250.00,50,125.00];
    const genres:TarrayString =  ['Men','Women'];
    const seasons:TarrayString = ['Winter','Spring', 'Summer', 'Fall'];
    const types:TarrayString = ['Running','Soccer','Lifestyle','Training','Skateboarding','Walking','classic'];
    const brands:TarrayString  = ['FUTURE COMPANY','SNEAKER COMPANY','NEON COMPANY','RS-2K','CANVERSE'];

    return {
        prices,
        genres,
        seasons,
        types,
        brands
    }
}

export default featured;