


interface DbOperations<T> {


    create(payload: any): Promise<T>;

    update(filter: any, payload: any): Promise<T>;

    findAll(filter: any): Promise<T[]>;

    findeOne(filter: any): Promise<T | null>;

    destroy(filter: any): Promise<T | null>;


}







export default DbOperations;