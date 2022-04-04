import {prop, Typegoose} from "@hasezoey/typegoose";


class URL extends Typegoose {
    @prop({required: true})
    public hash: string;

    @prop({required: true})
    public originalUrl: string;

    @prop({required: true})
    public shortURL: true;

    @prop({required: false})
    public createdAt: Date;

    @prop({required: false})
    public updatedAt: Date;
} 

export const URLModel = new URL().getModelForClass(URL);
