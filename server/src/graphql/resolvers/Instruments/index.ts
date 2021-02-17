import {ObjectId} from "mongodb";
import {IResolvers} from "apollo-server-express";
import {AddInstrumentInput, Database, Instrument} from "../../../lib/types";

export const instrumentsoResolvers: IResolvers = {
  Query: {
    instruments: async (
        _root: undefined,
        _args: {},
        {db}: { db: Database }
    ): Promise<Instrument[]> => {
      return await db.instruments.find({}).toArray();
    },
  },

  Mutation: {
    addInstrument: async (
        _root: undefined,
        {input}: { input: AddInstrumentInput },
        {db}: { db: Database }
    ): Promise<Instrument> => {
      const insertInstrument = await db.instruments.insertOne({
        _id: new ObjectId(),
        ticker: input.ticker
      });
      return insertInstrument.ops[0];
    },
    deleteInstrument: async (
        _root: undefined,
        {id}: { id: string },
        {db}: { db: Database }
    ): Promise<Instrument> => {
      const deleteRes = await db.instruments.findOneAndDelete({
        _id: new ObjectId(id)
      });

      if (!deleteRes.value) {
        throw new Error("failed to delete Instrument");
      }
      return deleteRes.value;
    }
  },

  Instrument: {
    id: (instrument: Instrument): string => instrument._id.toString(),
  }
}
