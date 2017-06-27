import tildeRemover from './tildeRemover';
import { pelotudezLevel } from '../config';

export default class OpressedEngine {

    static makeAware( exclusiveText, level ) {
        if ( !pelotudezLevel.some( (e) => e.value===level ) ) {   
            throw new Error(`Error de nivel de pelotudes. Level: ${level}`)
        }

        const levelObj = pelotudezLevel.find( (e) => e.value===level );
        const inclusiveText = levelObj.parser( tildeRemover(exclusiveText) );
        

        return inclusiveText;
    }
}