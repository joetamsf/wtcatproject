import { BEGINNERS } from "../../app/BEGINEERS";

export const selectNext = (id) => {
    if ( (id + 1) === BEGINNERS.length) {
        return BEGINNERS.find((beginner) => beginner.id === 0)
    } else {
        return BEGINNERS.find((beginner) => beginner.id === (id + 1))
    }
}

export const selectPrev = (id) => {
    if ( id === 0) {
        return BEGINNERS.find((beginner) => beginner.id === (BEGINNERS.length - 1))
    } else {
        return BEGINNERS.find((beginner) => beginner.id === (id - 1))
    }
}