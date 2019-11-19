export type DisplayDataReturnType = string | Date | boolean | number; //  Array<any>
export type DisplayDataFunc<ConfigDataType> = (data: ConfigDataType) => DisplayDataReturnType;
