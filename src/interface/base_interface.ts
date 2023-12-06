


interface DbOperations<T, U> {


    create(payload: any): Promise<T>;

    update(filter: any, payload: U): Promise<T>;

    findAll(filter: any): Promise<T[]>;

    findeOne(filter: any): Promise<T | null>;

    destroy(filter: any): Promise<T | null>;


}


export default DbOperations;