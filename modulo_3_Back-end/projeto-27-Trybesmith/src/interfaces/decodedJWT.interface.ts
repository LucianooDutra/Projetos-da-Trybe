interface IDecoded {
  payload: {
    id: number;
    username: string;
  };
  [key: string]: any;
}

export default IDecoded;