import { CATS } from "../../app/CATS";

export const selectCatById = (name) => {
    return CATS.find((cat) => cat.name === name)
};