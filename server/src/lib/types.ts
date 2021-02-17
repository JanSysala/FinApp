import {Collection, ObjectId} from "mongodb";

export interface Instrument {
  _id: ObjectId;
  ticker: string;
}

export interface Database {
  instruments: Collection<Instrument>;
}

export interface AddInstrumentInput {
  ticker: string;
}

export interface AddInstrumentArgs {
  input: AddInstrumentInput
}
